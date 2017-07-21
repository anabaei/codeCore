# One To Many

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

* Then we create nested resource comments inside posts to go next level
* Show a list of posts with link to show, we use helper method as well inside
``` ruby
<% @posts.each do |p| %>
   <%= link_to p.title, posts_show_path(p) %>
   <%= link_to 'Edit', edit_post_path(p) %>
   <%= link_to 'Delete', post_path(p), method: :delete %>
 <% end %>
```



### Validation

* We can add below validations on first line of a model
``` ruby
  validates :age, presence: true, uniqueness: true, numericality: { greater_than_or_equal_to: 10 }
```



* ...

















Tam link: https://github.com/CodeCoreYVR/bootcamp_summary_notes/blob/master/week_06/one_to_many.md
