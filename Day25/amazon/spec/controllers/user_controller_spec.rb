require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "new" do
    it "creates a new user instance variable" do
      get :new
      expect(assigns(:user)).to be_a_new(User)
    end

    it "renders the new template" do
      get :new
      expect(response).to render_template(:new)
    end
  end

  
  describe "create" do
    context "with valid params" do
      def valid_request
        attributes = {
          first_name: 'Jacky',
          last_name: 'Chui',
          email: 'jc@example.com',
          password: '123456'
        }

        byebug

        post :create, params: { user: attributes}
      end


      it 'do other stuff' do
        valid_request
      end
    end
  end
end