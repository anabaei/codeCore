class ProductsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :find_product, only: [:show, :edit, :update, :destroy]

  def index
    @products = Product.order(id: :desc).limit(10)
  end

  def show
    @review = Review.new
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    @product.user = current_user

    if @product.save
      flash[:notice] = "Product created successfully"
      redirect_to @product
    else
      flash[:alert] = "Problem creating your product"
      render :new
    end
  end

  def edit
    unless can? :edit, @product
      flash[:alert] = "Access Denied. You cannot edit a product that is not yours"
      redirect_to root_path
    end
  end

  def update
    if cannot? :edit, @product
      flash[:alert] = "Access Denied. You cannot edit a product that is not yours"
      redirect_to @product
    elsif @product.update(product_params)
      flash[:notice] = 'Product successfully updated.'
      redirect_to product_path(@product)
    else
      flash.now[:alert] = 'Please fix errors'
      render :edit
    end
  end

  def destroy
    if can? :destroy, @product
      @product.destroy
      flash[:notice] = "Product successfully deleted."
      redirect_to products_path
    else
      flash[:alert] = "Access Denied. You cannot delete a product that is not yours"
      redirect_to @product
    end
  end

  private

  def product_params
    params.require(:product).permit(:title, :description, :price, :category_id)
  end

  def find_product
    @product = Product.find(params[:id])
  end
end