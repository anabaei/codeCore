require 'rails_helper'

RSpec.describe ProductsController, type: :controller do
  let(:user)      {FactoryGirl.create(:user)}
  let(:category)  {FactoryGirl.create(:category)}
  let(:product)   {FactoryGirl.create(:product, category: category)}
  let(:product_1) {FactoryGirl.create(:product, category: category, user: user)}

  describe "index" do
    it "assigns an instance variable for all the products" do
      product
      product_1
      get :index
      expect(assigns(:products)).to eq([product_1, product])
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template(:index)
    end
  end
end