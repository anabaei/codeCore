class PostsController < ApplicationController
  def index
  end

  def new 
     @post = Post.new
  end

  def create
   	#byebug
    post_params = params.require(:post).permit(:name, :body, :location)
    
    Post.create post_params
  #  byebug
    redirect_to home_path
   # params[:post].permit( name:, body:, location:)
  	# render text: params[:post]
  end

  def edit
  end
end
