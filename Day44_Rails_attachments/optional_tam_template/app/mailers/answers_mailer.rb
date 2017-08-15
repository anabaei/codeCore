class AnswersMailer < ApplicationMailer
  def notify_questions_owner(answer)
    # You can share instance variables with templates just like in controllers
    @answer = answer
    @question = answer.question
    @user = @question.user

    if @user.present?
      mail(to: @user.email, subject: 'You got an answer to your question!')
    end
  end
end
