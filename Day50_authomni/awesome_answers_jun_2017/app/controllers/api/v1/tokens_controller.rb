class Api::V1::TokensController < Api::ApplicationController
  def create
    # params = { ..., email: "js@winterfel.gov", password: "supersecret"}
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      render json: {
        jwt: encode_token({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name
        })
      }
    else
      head :not_found
    end
  end

  private
  def encode_token(payload = {}, exp = 24.hours.from_now)
    # jwt tokens once issued cannot be revoked therefore it's best practice
    # to give an expiration date. `exp` will act as the expiration in the payload.
    # We send it as a timestamp.
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end
end
