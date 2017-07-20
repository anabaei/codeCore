class Admin::DashboardController < Admin::BaseController
  def index
    @products = Product.all
    @reviews = Review.all
    @users = User.all
  end
end
