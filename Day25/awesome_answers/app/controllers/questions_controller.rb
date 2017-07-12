class QuestionsController < ApplicationController
 def index
    @questions = Question.order(created_at: :desc)
  end

  # The New action is usually used to show a form of
  # the resource we'll create on submission
  # URL: /questions/new
  # VERB: GET
  def new
    # Instance variables declared in controllers are accessible
    # views rendered by that action.
    # This means that we can use `@question` inside of `views/questions/new.html.erb`.
    @question = Question.new
  end

  def edit
    @question = Question.find params[:id]
  end

  def update
    @question = Question.find params[:id]
    question_params = params.require(:question).permit(:title, :body)

    if @question.update question_params
      redirect_to question_path(@question)
    else
      render :edit
    end
  end

  def destroy
    @question = Question.find params[:id]
    @question.destroy
    redirect_to questions_path
  end

  def show
    @question = Question.find params[:id]
    # order create at desc
    @anwers = @quesion.answer
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
    # The params object is avaible in all controllers and it gives you
    # access to all the data coming from a form or url params

    # Require is used to get a nested hashed with the given symbol
    # inside of the params object (in this case :question)

    # Every input field of a form must be permitted individiually
    # otherwise rails will throw an error. This is to prevent users
    # from creating their fields
    @question = Question.new question_params

    if @question.save
      # redirect_to question_path(id: @question.id)
      # redirect_to question_path(@question.id)
      redirect_to question_path(@question)
    else
      # this will render the `views/questions/new.html.erb` to
      # show the form again (with errors). The default behaviour is to
      # render `create.html.erb`
      render :new
    end
  end


end
