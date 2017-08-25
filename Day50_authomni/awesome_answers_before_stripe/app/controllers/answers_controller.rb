class AnswersController < ApplicationController
  before_action :authenticate_user!
  def create
    @question = Question.find params[:question_id]
    @answer = @question.answers.build(answer_params)
    @answer.user = current_user
    # 👆 shortcut for doing 👇
    # answer = Answer.new(answer_params)
    # answer.question = question

    respond_to do |format|
      if @answer.save
        # AnswersMailer.notify_questions_owner(@answer).deliver_now
        @question.answer! if @question.may_answer? # change the state of the question to `answered`
        format.html { redirect_to question_path(@question) }
        format.js { render :create_success }
      else
        # We can use render to display any template by providing their
        # beginning from the `views/` folder.
        @answers = @question.answers
        format.html { render 'questions/show' }
        format.js { render :create_failure }
      end
    end
  end

  def destroy
    @answer = Answer.find params[:id]
    @question = @answer.question

    respond_to do |format|
      if can?(:destroy, @answer)
        @answer.destroy
        @question.publish! if @question.answers.count == 0
        format.html { redirect_to question_path(@answer.question) }
        format.js { render }
      else
        head :unauthorized
      end
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:body)
  end
end
