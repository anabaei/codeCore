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


### Validation

* We can add below validations on first line of a model
``` ruby
  validates :age, presence: true, uniqueness: true, numericality: { greater_than_or_equal_to: 10 }
``` 
* ...

















Tam link: https://github.com/CodeCoreYVR/bootcamp_summary_notes/blob/master/week_06/one_to_many.md
