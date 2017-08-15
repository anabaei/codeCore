class PostsController < ApplicationController

  def index
  @posts = Post.order("created_at desc")
  @mostlike = Post.last
  end

  def index1
  @posts = Post.order("created_at desc")
  @mostlike = Post.last
  end

  def show
     @comment = Comment.new
     @post = Post.find params[:id]
     @comments = @post.comments.order(created_at: :desc)

  end

  def create
   @post = Post.new post_params
    if @post.save
     redirect_to posts_path, alert: "you save"
   else
     redirect_to new_post_path, alert: "no save!"
    end
  end

  def new
    @post = Post.new
    @categories = Category.all
  end

  private
  def post_params
    params.require(:post).permit(:title, :body, :category_id)
  end

end
