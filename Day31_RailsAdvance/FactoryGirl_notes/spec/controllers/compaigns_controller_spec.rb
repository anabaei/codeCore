require 'rails_helper'

RSpec.describe CompaignsController, type: :controller do

  




  describe '#new' do
     
     descirbe ' with no user 'do 
     end


     describe ' with sign in' do
     befor do 
     	request_session[:user_id] = FacotoryGirl.create(:user).id
     end  




    it 'renders the new template' do
      # GIVEN: Default state
      # WHEN: we make a GET request to the `new` action

      # rspec_rails comes with a variety of methods to simulate web requests
      # to your application. (e.g `get`, `post`, `delete`, `patch`, `put`, etc)
      # `get :new` will simulate a GET request to the controller describe in
      # the spec above, `CampaignsController`, to the `new` action.
      # For more on controller testing with rspec, checkout:
      # https://relishapp.com/rspec/rspec-rails/v/3-6/docs

      get :new
      expect(response).to render_template(:new)
    end




    it 'assigns campaign instance variable to a new Campaign' do
      get :new
      # @campaign from the CampaignsController#new
      expect(assigns(:campaign)).to be_a_new Campaign
    end
  end

  describe '#create' do
    it 'creates a new campaign in the database'do
      count_before = Campaign.count
      post :create, params: { campaign: FacotoryGirl.attributes_for(:campaign)}
      counter_after = Campaign.count
      expect(count_after).to eq(count_before +1)
    end 
    it 'redirects to the campaign show page' do 
     post :create, params: { compaign: FacotoryGirl.attributes_for(:campaign)}
     expect(response).to redirect_to(campaign_path(Campaign.last))
    end 
  end

  describe '#destroy' do
    it 'removes the record from the database'
  end
end