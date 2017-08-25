class TipsController < ApplicationController
  before_action :authenticate_user!

  def new
    @answer = Answer.find params[:answer_id]
    @tip = Tip.new
  end

  def create
    @answer = Answer.find params[:answer_id]
    @tip = @answer.tips.new tip_params
    if @tip.save
      redirect_to new_tip_payment_path(@tip)
    else
      render :new
    end
  end

  private

  def tip_params
    params.require(:tip).permit(:amount)
  end
end
