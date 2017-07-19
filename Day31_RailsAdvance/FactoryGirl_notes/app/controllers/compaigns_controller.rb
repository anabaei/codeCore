class CompaignsController < ApplicationController
	
	def new
	end

	def create
	 # byebug
	 @campaign = Campaign.new 
	end

     private

     def campaign_params
    params.require(:compaign).permit(:title, :body, :goal)
     end 

end
