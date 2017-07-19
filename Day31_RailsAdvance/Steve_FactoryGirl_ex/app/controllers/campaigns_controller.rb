class CampaignsController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]

  def new
    @campaign = Campaign.new
  end

  def create
    byebug
    @campaign = Campaign.new campaign_params
    if @campaign.save
      redirect_to campaign_path(@campaign)
    else
      render :new
    end
  end

  private
  def campaign_params
    params.require(:campaign).permit(:title, :body, :goal, :end_date)
  end
end
