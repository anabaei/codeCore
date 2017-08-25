class Api::V1::QuestionsController < Api::ApplicationController
  before_action :authenticate_user!
  before_action :find_question, only: [:show]

  def show
    # render json: current_user
    render json: @question
  end

  def index
    # Before careful when using associations, rails will make a query for
    # every association called. This can blow in a loop reducing the performance
    # to O(n**2). Use the `.includes` method on an ActiveRecord to eager load
    # an association. In this case, we eager load users that own a question
    # to display their full names in the json response.
    @questions = Question.order(created_at: :desc).includes(:user)
    # When using jBuilder to server JSON, make sure that you do
    # not render with `render json: @question`. This would instead serialize
    # @question (transforming into json) and send that as a response.
    # Instead use render as you to send a template.
    # (e.g. `render :index`, `render`, no render at all)
    # render json: @questions
  end

  def create
    question = Question.new(question_params)
    question.user = current_user

    if question.save
      render json: { id: question.id }
    else
      render json: { error: question.errors.full_messages }
    end
  end

  def destroy
    if @question.destroy
      head :ok
    else
      head :bad_request
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :body)
  end

  def find_question
    # 👇 Nested eager loading. Pre-queries for associated answers and users
    # of answers.
    # @question = Question.includes(answers: [:user]).find(params[:id])
    @question = Question.find(params[:id])
  end
end
