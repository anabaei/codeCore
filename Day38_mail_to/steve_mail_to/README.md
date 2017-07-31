# Mail to



gem 'letter_opener'

rails g mailer AnserMailer 
open the answer class  



def test 
  mail(to: 'example@gmail.ca', subject: 'you got mail!')
end


def notify_questions_owner(answer)
 mail(to: 'example@gmail.ca', subject: 'you got mail!')
end



AnwserMailer.notify_questions_owner(Answer.all.sample).deliver_now



insude : config environemnt developer 


config.action_mailer.delivar_method = :letter_opener

config.action_mailer.default_url_options = {
	host: 'localhost:300'
}

then it works!

then 

after if  @answer.save
AnwserMailer.notify_questions_owner(Answer.all.sample).deliver_now



create html page :

add html css inside the link, also we can use all the rails helper 

Action Mailer 
6.1 

6.2 is easy, 




CREATE SETUP MAIL INSIDE INTIIALIZE 
as 

ActionMailer::Base.smtp_settings = {
  address: 'smtp.gmail.com',
  port: '587',
  enable_starttls_auto: true,
  authentication: :plain,
  user_name: ENV['EMAIL_USER_NAME'],
  password: ENV['EMAIL_PASSWORD']
}


then create file app_keys.rb

then inside .GITIFNORE

/config/initializers/app_keys.rb 


notice: ENV is global hash 

then inside the environemtn we say it is gmail 

instead of letter_opener we say it is :smtp


inside app_keys.rb 
ENV['EMAIL_USER_NAME'] = 'steve.god@gmail.com'
ENV['EMAIL_PASSWORD'] = 'thatwasaclosecall'


inside app_keys.rb.exampl
# Only replace 'PUT YOUR *' after you've copied me as
# `app_keys.rb`. Do not change this file. Only the copy.
ENV['EMAIL_USER_NAME'] = 'PUT YOUR EMAIL HERE'
ENV['EMAIL_PASSWORD'] = 'PUT YOUR PASSWORD HERE'


--  

gem Delay job active record gem 
gem delay job web 

delay g delayed_job:active_record 

#delay job web it shows you what jobs can run 
inside routes, 

 match "/delayed_job" => DelayedJobWeb, anchor: false, via: [:get, :post]

now in /delayed_job/overview

then we see the jobs 
now we have set the base and we can make everything 
inside the app/jobs folder exist

rails g job question_reminder 
//  it create a file inside app/jobs 


queue_as :default

def perform(question)
  puts 'job Ran!'
end 

end


in console
QuestionReminerJob
QuestionReminerJob.perform_later(Question.last)

here you can do asynchronosly on the jobs 

QuestionReminerJob.set(wait: 10.days).perform_later(Question.last)

got to config app

inside 

class Application < Rails::Application

config.active_job.queue_adapter = :delayed_job

now if we run 
Delayed::job.all


inside question job

def perform(question_id)
  question = Question.find question_id 
end

if question.answers.count.zero?
  QuestionMailer.send_reminder(question).deliver_now 
end

in console
Delayed::Job.all
Delayed::Job.invoke_job


gem pry

in console pry
ls Delayed::job.first


if save
// in controler Rails understand that should do a job by 5 days from now and pass an id to it. 
QuestionReminderJob.set(wait: 5.days).perform_later(@question_id)














