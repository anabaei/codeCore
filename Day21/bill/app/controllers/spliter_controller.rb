class SpliterController < ApplicationController
  
  def index
  	@amount = params[:amount].to_f
  	@tax = params[:tax].to_f/100
  	@tip = params[:tip].to_f
  	@people = params[:people].to_f
  	flash[:notice] = "Post successfull!"

  end

end
