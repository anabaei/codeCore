class ContactController < ApplicationController
  
  def new
  end
  def create 
  	@name = params[:name]
  	render 'new'
  end

end
