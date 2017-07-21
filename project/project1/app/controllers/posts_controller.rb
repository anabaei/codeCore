class PostsController < ApplicationController
  
  def index
  	@posts = Post.all
  end

  def new 
     @post = Post.new
  end

  def create
   	#byebug


    post_params = params.require(:post).permit(:name, :body, :location)
    
    Post.create post_params
  #  byebug
    redirect_to posts_index_path
   # params[:post].permit( name:, body:, location:)
  	# render text: params[:post]
  end

  def edit
  end

  def show
  #   byebug
  	@post = Post.find params[:id]
  	@comments = Comment.where(post_id: params[:id])
  #	byebug
  end 
end
