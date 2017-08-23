class UsersController < ApplicationController
  def index
  end

  def new
    @user = User.new
  end

  def create
    input = params.require(:user).permit(:first_name, :last_name, :email, :password)
    if User.create(input)
      redirect_to home_path, notice: 'Thank you for signing up!'
    else
      redirect_to  new_user_path, notice: 'Something wrong try again' 
  end

  def show
  end
end
