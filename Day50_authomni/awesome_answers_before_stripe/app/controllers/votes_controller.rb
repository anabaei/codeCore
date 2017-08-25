class VotesController < ApplicationController
  before_action :find_answer, only: [:create]
  before_action :find_vote, only: [:destroy, :update]

  def create
    vote = Vote.new(
      user: current_user,
      answer: @answer,
      is_up: params[:is_up]
    )

    if vote.save
      # redirect_to question_path(@answer.question), notice: 'Thanks for voting!'
      # when providing redirect_to with an instance of a model, rails
      # will attempt to generate the correct for the show action of that model
      # 👇 is a shortcut for 👆
      redirect_to @answer.question
    else
      redirect_to @answer.question, alert: vote.errors.full_messages.join(', ')
    end
  end

  def destroy
    if @vote.destroy
      redirect_to @vote.answer.question
    else
      redirect_to @vote.answer.question, alert: vote.errors.full_messages.join(', ')
    end
  end

  def update
    if @vote.update is_up: params[:is_up]
      redirect_to @vote.answer.question
    else
      redirect_to @vote.answer.question, alert: vote.errors.full_messages.join(', ')
    end
  end

  private
  def find_answer
    @answer = Answer.find(params[:answer_id])
  end

  def find_vote
    @vote = Vote.find(params[:id])
  end
end
