class SessionsController < ApplicationController
  def new
  end

  def create
    # We have the user's email & password from the params
    # 1. Find the user by their email
    # 2. If found, we authenticate the user with the given password
    # 3. If authentication not successful, we alert the user with wrong credentials
    user = User.find_by(email: params[:email])

    # user && user.authenticate(params[:password])
    # &. can be used in place of the dot operator when calling methods on
    # objects. It gives us a way to against NoMethod for nil:Class errors.
    # It will immeditely return `nil` instead of calling the method after
    # it unless the object before is not `nil`.
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      # flash[:notice] = 'Thank you for signing in! ❤️'
      redirect_to home_path, notice: 'Thank you for signing in! ❤️'
    else
      flash.now[:alert] = 'Wrong email or password!'
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to home_path, notice: 'Signed out!'
  end
end
