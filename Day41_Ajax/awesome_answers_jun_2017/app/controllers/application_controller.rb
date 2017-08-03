class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def user_signed_in?
    # The following is to prevent the app from crashing if we have
    # a user_id in the session and no corresponding user with that id in the db.
    # This occurs when a logged in user is deleted.
    if session[:user_id].present? && current_user.nil?
      session[:user_id] = nil
    end
    session[:user_id].present?
  end
  helper_method :user_signed_in?

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
  # The `helper_method` method makes a method available in all views. It effectively
  # turns into a helper method.
  helper_method :current_user

  def authenticate_user!
    if !user_signed_in?
      redirect_to new_session_path, notice: 'Please sign in!'
    end
  end
end
