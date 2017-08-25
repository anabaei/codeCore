class QuestionReminderJob < ApplicationJob
  queue_as :default

  # To list jobs from the rails console, use:
  # `Delayed::Job.all`
  # To get the first, `Delayed::Job.first`
  # To run a job from the queue, `Delayed::Job.first.invoke_job`

  # When creating any rails job, make sure there's a method called `perform`.
  # This is the method that will be called by ActiveJob (DelayedJob) when the
  # time comes.
  def perform(question_id)
    question = Question.find question_id

    if question.answers.count.zero?
      QuestionsMailer.send_reminder(question).deliver_now
    end
  end
end
