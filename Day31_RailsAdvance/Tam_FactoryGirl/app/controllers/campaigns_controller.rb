class CampaignsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :find_campaign, only: [:show, :edit, :destroy]
  before_action :authorize_user, only: [:edit]

  def new
    @campaign = Campaign.new
  end

  def create
    @campaign = Campaign.new campaign_params
    @campaign.user = current_user
    if @campaign.save
      redirect_to campaign_path(@campaign)
    else
      render :new
    end
  end

  def show
  end

  def index
    @campaigns = Campaign.order(created_at: :desc)
  end

  def edit
  end

  def destroy
    @campaign.destroy
    head :ok
  end

  private

  def campaign_params
    params.require(:campaign).permit(:title, :body, :goal, :end_date)
  end

  def find_campaign
    @campaign = Campaign.find params[:id]
  end

  def authorize_user
    if @campaign.user != current_user
      head :unauthorized
    end
  end
end
