require 'rails_helper'

RSpec.describe CampaignsController, type: :controller do
  # def user
  #   @user ||= FactoryGirl.create(:user)
  # end

  # The pattern above is so common that RSPEC provides an helper
  # to create it. The code below 👇 is essentially equivalent to the
  # above 👆
  let(:user)     { FactoryGirl.create(:user) }
  # the owner of 👇 the campaign below with be the `user` 👆
  let(:campaign)   { FactoryGirl.create(:campaign, user: user) }
  let(:campaign_1) { FactoryGirl.create(:campaign) }

  describe '#new' do
    context 'with no user sign in' do
      it 'redirects to the sign in page' do
        get :new
        expect(response).to redirect_to(new_session_path)
      end
    end

    context 'with user signed in' do
      before do
        request.session[:user_id] = user.id
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
  end

  describe '#create' do
    def valid_post
      # when simulating a post request, you usually have to provide
      # it with a `params` argument that takes a hash in the shape
      # of the data as it would appear in a form submission.
      post :create, params: { campaign: FactoryGirl.attributes_for(:campaign) }
    end

    context 'with no user signed in' do
      it 'redirects to the sign in page' do
        valid_post
        expect(response).to redirect_to(new_session_path)
      end
    end

    context 'with signed in user' do
      before do
        # request.session[:user_id] = user.id
        login(user)
      end

      context 'with valid attributes' do
        it 'creates a new campaign in the database' do
          count_before = Campaign.count
          valid_post
          count_after = Campaign.count

          expect(count_after).to eq(count_before + 1)
        end

        it 'redirects to the campaign show page' do
          valid_post
          expect(response).to redirect_to(campaign_path(Campaign.last))
        end

        it 'associates the created campaign with the signed in user' do
          valid_post
          expect(Campaign.last.user).to eq(user)
        end
      end
      context 'with invalid attributes' do
        # before is a method that will run code before all tests inside the
        # context or describe it's part of. In this case, it will run before
        # the tests 'doesn\'t create a campaign in the database' and
        # 'renders new template'
        before do
          campaign = FactoryGirl.attributes_for(:campaign)
          campaign[:title] = ''
          post :create, params: { campaign: campaign }
        end

        it 'doesn\'t create a campaign in the database' do
          expect(Campaign.count).to eq(0)
        end

        it 'renders new template' do
          expect(response).to render_template(:new)
        end
      end
    end
  end

  describe '#show' do
    before do
      # GIVEN: A campaign exists in the database
      # campaign = FactoryGirl.create(:campaign) # <- this got replaced by using
      #                                               the `let` technique in
      #                                               RSpec

      # WHEN: we send a GET request to the show action
      get :show, params: { id: campaign.id }
    end

    it 'renders the show template' do
      # THEN: renders the show template
      expect(response).to render_template(:show)
    end

    it 'assigns an instance variable to the campaign whose id is passed' do
      # THEN:
      # assigns(:campaign) -> this is checking for an instance variable named
      #                       @campaign in the `show` action
      expect(assigns(:campaign)).to eq(campaign)
    end
  end

  describe '#index' do
    it 'renders the index template' do
      get :index
      expect(response).to render_template(:index)
    end

    it 'sets an instance to all campaigns in the database ordered by creation' do
      # we're calling the `campaign` and `campaign_1` methods because we want
      # the campaigns to be created before we do a GET request to the `index`
      # action
      campaign
      campaign_1

      get :index

      expect(assigns(:campaigns)).to eq([campaign_1, campaign])
    end
  end

  describe '#edit' do
    context 'with user NOT signed in' do
      it 'redirects the user to the sign in page' do
        get :edit, params: { id: campaign.id }
        expect(response).to redirect_to(new_session_path)
      end
    end
    context 'with user signed in' do
      before { login(user) } # the login method is defined inside /spec/support/login_helpers.rb
      context 'with owner signed in' do
        it 'renders the edit template' do
          get :edit, params: { id: campaign.id }
          expect(response).to render_template(:edit)
        end

        it 'assigns an instance variable with campaign whose id is passed' do
          get :edit, params: { id: campaign.id }
          expect(assigns(:campaign)).to eq(campaign)
        end
      end
      context 'with non-owner signed in' do
        it 'render unauthorized HTTP response' do
          get :edit, params: { id: campaign_1.id }
          expect(response).to have_http_status(:unauthorized)
        end
      end
    end
  end

  describe '#update' do
    context 'with user NOT signed in' do
      it 'redirects to the sign in page'
    end
    context 'with user signed in' do
      context 'with non-owner signed in' do
        it 'returns an HTTP :unauthorized code'
      end
      context 'with owner signed in'do
        context 'with valid attributes' do
          it 'updates the passed fields in the database'
          it 'redirects to the show page'
        end
        context 'with invalid attributes' do
          it 'renders the edit template'
        end
      end
    end
  end


  describe '#destroy' do
    # TODO: research using shared examples to refactor user not signed in
    context 'with user NOT signed in' do
      it 'redirects to the sign in page'
    end

    context 'with user signed in' do
      before { login(user) } # `user` is the owner of `campaign`
      context 'with non-owner signed in' do
        it 'render HTTP :unauthorized code'
      end
      context 'with owner signed in' do
        it 'removes the record from the database' do
          campaign # this is to force create the campaign at this point before
                   # we get the count which we expect to be 1
          count_before = Campaign.count
          delete :destroy, params: { id: campaign.id }
          count_after = Campaign.count
          expect(count_before).to eq(count_after + 1)
        end
        it 'redirects to the campaigns index page'
      end
    end

  end
end










#
