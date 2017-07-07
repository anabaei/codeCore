class QuestionsController < ApplicationController
   def new
    # Instance variables declared in controllers are accessible
    # views rendered by that action.
    # This means that we can use `@question` inside of `views/questions/new.html.erb`.
    @question = Question.new

  end

  # The Create action is used to handle form submissions from the New
  # action to create a record (of a question in this case) in the database.
  # URL: /questions
  # VERB: POST
  def create
    # Byebug is a gem that is installed by default rails. You can use
    # to pause execution of any ruby program. In this case, we use pause
    # the server when the `create` action is called. This will pause server
    # itself. Go to your terminal tab when `rails s` was run to access
    # the debugger REPL. Type `exit` to leave byebug.
    # byebug
    question_params = params.require(:question).permit(:title, :body)
   ## byebug
    @question = Question.new question_params

    if @question.save
    	redirect_to home_path
     else  	
       # this renders /questions/new
       render :new 
     end 
  end
end
