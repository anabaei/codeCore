class PublishingsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_question
  before_action :authorize_user

  def create
    @question.publish!
    redirect_to @question
  end

  private

  def find_question
    @question = Question.find params[:question_id]
  end

  def authorize_user
    head :unauthorized unless can?(:publish, @question)
  end
end
