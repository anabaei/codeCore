class CallbacksController < ApplicationController
  def index
    omniauth_data = request.env['omniauth.auth']

    user = User.find_by_omniauth(omniauth_data)
    user ||= User.create_from_omniauth(omniauth_data)
    user.update_oauth_credentials(omniauth_data) if user.present?
    session[:user_id] = user.id

    if user.valid?
      redirect_to root_path, notice: "Thanks for signing in with #{params[:provider].capitalize}!"
    else
      redirect_to root_path, alert: user.errors.full_messages.join(', ')
    end
  end
end
