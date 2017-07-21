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
* since we have nested resource, we can define this '/posts/20/comments' as an action in out form in view 
```ruby
 <%= form_for [@post, @comment] do |f| %>
    <%= f.text_area :body %>
    <%= f.submit %>
 <% end %>
```
it is a new comment, so in show action we have to define `@comment = Comment.new' and the @post is the same one already exist


### Validation

* We can add below validations on first line of a model
``` ruby
  validates :age, presence: true, uniqueness: true, numericality: { greater_than_or_equal_to: 10 }
```



* ...

















Tam link: https://github.com/CodeCoreYVR/bootcamp_summary_notes/blob/master/week_06/one_to_many.md
