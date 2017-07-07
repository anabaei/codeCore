class ProductsController < ApplicationController
  def index
     @products = Product.all

  end
  def create 
  	 product_params = params.require(:product).permit(:title, :description, :price)
     @product = Product.new(product_params)
  
   if @product.save
     flash[:notice] = "Product created successfully"
      redirect_to home_path
    else
      flash[:alert] = "Problem creating your product"
      render :new   
    end
   end 

    def show
      @product = Product.find params[:id]
    end     
end
