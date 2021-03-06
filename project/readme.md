# One To Many

* We have post and comments models 
* Each post has many comments, so we add post reference to comments  
``` ruby
    rails g migration add_post_to_comment post:references  
``` 
* To allow having some comments not belong to posts, inside comment model we add
``` ruby
belongs_to :post, optional: true
````
* To avoid cascade delete and keep comments even if a post of that were removed we add below to post model  
``` ruby
has_many :comments, dependent: :nullify 
````
`CASCADE`
Whenever rows in the master (referenced) table are deleted, the respective rows of the child (referencing) table with a matching foreign key column will get deleted as well. This is called a cascade delete 

* define routes with each id to be able to send each post with its whole params into show action 
``` ruby
get "/posts/:id" => "posts#show" 
```
* then anytime it links to show, then it contains applicable info. So to see it we pass params[:id] inside show action to a local variable and display it in show page. 
* A list of posts with link to show each one. see the params p is passing 
``` ruby
<% @posts.each do |p| %>
   <%= link_to p.title, post_path(p) %>
   <%= link_to 'Edit', edit_post_path(p) %>
   <%= link_to 'Delete', post_path(p), method: :delete %>
 <% end %>
```
* Then we create nested resource comments inside posts to go next level
* now in each page we can show all comments related to that post, show action inside post would be like this
``` ruby
def show
  	@post = Post.find params[:id]
  	@comments = Comment.where(post_id: params[:id])
  end 
```

### Add Comment to each post
* since we have nested resource, we can define this `/posts/20/comments` as an action in form 
```ruby
 <%= form_for [@post, @comment] do |f| %>
    <%= f.text_area :body %>
    <%= f.submit %>
 <% end %>
```
it is a new comment, so in show action we have to define `@comment = Comment.new` and the @post is the same one already exist
Rignt now we have ready text area. To actually save the comments we work on comment/create controller/action. 
* `Notice` To see what is in controller, put byebug and type `params` or `params.require(:comment)` to see active conttroller, also as an hash we have `params[:comment][:body]` inside console.

* Just in controller first find the post id, then create a new comment and add that post_id to it.
```ruby
  def create
  	postid = params.require(:post_id)
  	newcomment = Comment.new(params.require(:comment).permit(:body)) 
  	newcomment.post_id = postid
  	if(newcomment.save)
     redirect_to posts_path
    end  		
  end
``` 
* Also we can have another way, here comments means the controller name in the middle 
```ruby
def create
    @post = Post.find params[:post_id]
    newcomment = @post.comments.build(params.require(:comment).permit(:body))
    if(newcomment.save)
```

### Validation

* We can add below validations on first line of a model
``` ruby
  validates :age, presence: true, uniqueness: true, numericality: { greater_than_or_equal_to: 10 }
```



* ...

















Tam link: https://github.com/CodeCoreYVR/bootcamp_summary_notes/blob/master/week_06/one_to_many.md
