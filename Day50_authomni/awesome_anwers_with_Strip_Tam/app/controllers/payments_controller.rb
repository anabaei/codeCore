class PaymentsController < ApplicationController
  before_action :authenticate_user!

  def new
    @tip = Tip.find params[:tip_id]
  end

  def create
    @tip = Tip.find params[:tip_id]

    # TODO: move this code to a service object (you will need to learn more
    # about the service object pattern to do this)
    begin
      charge = Stripe::Charge.create(
        amount: (@tip.amount * 100).to_i,
        currency: "cad",
        source: params[:stripe_token], # obtained with Stripe.js
        description: "Charge for tip #{@tip.id} | from user #{current_user.id}"
      )
      @tip.update(txn_id: charge.id)
      redirect_to @tip.answer.question, notice: 'Thanks for the payment'
    rescue => e
      # We will get here if an exception happens
      flash.now[:alert] = "Error: #{e.message}"
      render :new
    end
  end

end
