class AnswersController < ApplicationController
  before_action :authenticate_user!
  def create
    @question = Question.find params[:question_id]
    @answer = @question.answers.build(answer_params)
    @answer.user = current_user
    # 👆 shortcut for doing 👇
    # answer = Answer.new(answer_params)
    # answer.question = question

    if @answer.save
      AnswersMailer.notify_questions_owner(@answer).deliver_now
      @question.answer! if @question.may_answer? # change the state of the question to `answered`
      redirect_to question_path(@question)
    else
      # We can use render to display any template by providing their
      # beginning from the `views/` folder.
      @answers = @question.answers.order(created_at: :desc)
      render 'questions/show'
    end
  end

  def destroy
    answer = Answer.find params[:id]
    question = answer.question
    if can?(:destroy, answer)
      answer.destroy
      question.publish! if question.answers.count == 0
      redirect_to question_path(answer.question)
    else
      head :unauthorized
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:body)
  end
end
