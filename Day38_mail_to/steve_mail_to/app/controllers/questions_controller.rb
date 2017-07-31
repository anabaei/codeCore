class QuestionsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  # `before_action` can be used to run before any action in a controller.
  # The second argument is a symbol named after the method we would to run.
  # In this example, the before_action calls the find_question before say
  # the index, or new, etc.
  before_action :find_question, only: [:edit, :destroy, :show, :update]
  # We can filter which methods the `before_action` will be called
  # by proving an `only:` argument giving an array symbols named after the actions.
  # There is also `except:`.

  before_action :authorize_user!, only: [:edit, :destroy, :update]

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
  end

  def update
    if @question.update question_params
      redirect_to question_path(@question)
    else
      render :edit
    end
  end

  def destroy
    @question.destroy
    redirect_to questions_path
  end

  def show
    @answer = Answer.new
    @like = @question.likes.find_by(user: current_user)
    # Using association methods just builds queries, meaning that
    # we can continue chaining more and more query methods such order, limit, offset, where
    # , etc
    @answers = @question.answers.order(created_at: :desc)
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

    @question = Question.new question_params
    @question.user = current_user

    if @question.save
      QuestionReminderJob.set(wait: 5.days).perform_later(@question.id)
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

  private
  def question_params
    params.require(:question).permit(:title, :body, :tag_list)
    # The params object is avaible in all controllers and it gives you
    # access to all the data coming from a form or url params

    # Require is used to get a nested hashed with the given symbol
    # inside of the params object (in this case :question)

    # Every input field of a form must be permitted individiually
    # otherwise rails will throw an error. This is to prevent users
    # from creating their fields
  end

  def find_question
    @question = Question.find params[:id]
  end

  # remember that if a `before_action` does `render`, `redirect_to` or `head`
  # it will stop the request from getting to the action (it will basically halt
  # the request right there)
  def authorize_user!
    # head :unauthorized unless can?(:manage, @question)
    unless can?(:manage, @question)
      # redirect_to root_path, alert: 'Access denied'

      # head will send an empty HTTP response, it takes one argument as a symbol
      # and the argument will tell Rails to send the desired HTTP response code
      # 	:unauthorized -> 401
      # you can see more code on this page:
      # http://billpatrianakos.me/blog/2013/10/13/list-of-rails-status-code-symbols/
      head :unauthorized
    end
  end
end






##
