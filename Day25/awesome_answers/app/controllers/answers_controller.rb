class AnswersController < ApplicationController
  def create
  	question = Question.find params[:question_id]
    answer_params = params.require(:answer).permit(:body)

    answer = question.answers.build_answer(answer_params)
    # ð shortcut for doing ð
    # answer = Answer.new(answer_params)
    # answer.question = question

    answer.save
    redirect_to question_path(question)
  end

  def index
  end
end
