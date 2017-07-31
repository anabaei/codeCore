# Many to Many 

`Hirb.enable`

has_and_belongs_to_many 
means that the join table woold not have a corresponding model, but the associated table is not accessable, we use another way 

create join table and access it,
so it is like 'like' table among users and questions

* Connecting togather through a table togather  
`rails g model like user:references question:references` 
* Then we add `,index: true` in migrations in front of foreign keys because searching through these foreign keys are always happen
Now the model likse has its own associations, but we still have to add below to both `user` and `question` models 
```ruby
has_many :likes, dependent: :destroy
```
* depenedent :destroy means when user deleted all the likes are gone
*In console we have:
```ruby
l = Like.new user: User.first, question: Question.first
l.user.likes gives all the likes user have 
u = User.first
u.likes
u.likes.create question: Question.first(2).last
```
`l.question` gives the question associtated to it
it has not went to many to many yet! 

*  Inside `user` model we define a new relationship through a middle table with another table. The association 
```ruby
has_many :liked_questions, through: :likes, source: :question
```
liked_questions is what we call our relationship, it doesnt have to be a table that exist, it is a name of choosing to define a name and then have to specify what tables it associated. First we tell which table it associates through(middle table) and then what `id` im getting in likes table. Here we get question id in likes table to get all questions are in likes table. 

`u = User.first
u.liked_questions  it gives all the questions that the user has liked
u.like_questions << Question.last
Like.all 
u.liked_questions`

if we put liked_questions before has_many we get error. Through association table must be exist then the new relation that we define knows through what should pass, 

* Now lets go to question model,
```ruby
has_many :likers, through: :likes, source: :user
```
* in console.
```ruby
q = Question.last(10).first
q.likers << User.all.sample
q.likers
q.likes -- corresponding likes 
q.liker_ids 
return the ids 
q.liker_ids = [12,32,43[ to overwriete 
q.likes.destroy_all -- remvoe all 
q.likers = User.where(first_name: 'jon) it returns an array of users 
```
activerecord collection has its own << which are really commands that everyone can define them or costomize them.
to avoid a user to like a thing twice we use validation 

##### in like model

The following validation guarantee that there can be only one of the same question_id per user_id. This means that a user 
```ruby
validates :question_id, uniqueness: {
scope: :user_id 
message: "has already been liked %{model} %{value}  %{attribute.downcase}"
}
```
scope means this is unique for user_id 
to have an error message
validation in columns is with :user_id 

* Anonymosoeu fucniton in Ruby
object is argument 
message: ->(object, data) do {"#{data[:object]}"}


##### Craete a button like in API

likes would be nested in question 
<%= link_to 'Like', question_likes_path(@question), method: :post %>
<%= @question.likes.count %> likes

* In routes
```ruby
resource :question do
  resources :likes, only: [:create, :destroy]
end 
```
`rails g conttroller likes --help --no-assets --skip-routes --no-helper`
* In likes controller
```ruby
before_action :find_question, only: [:create]
before_action :find_like, only: [:destroy]

def create
 like = Like.new user: current_user, question: @question
 if like.save
   reduret_to @question, notice: 'Thanks for liking' 
 else 
   reduret_to @question, alert: like.errors.full_message.join(',') 
 end
 // render json: params 
end 

private 
def find_question
  @question = Question.find(params[:question_id])
end 
```
* Adding another button only if the question is liked, 

in view we add below unlike and pass the like id 
```ruby
<% like = @question.likes.find_by(user: current_user) %>
<% if like.present? %>
  <%= link_to 'unlike', question_like_path(@question, like), method: :delete %>
<% else %>
```
now question inspect has both qustion and like ids, 

---- 
*inside likes controller 
```ruby
def destroy
   if @like.destroy 
     redirect_to @like.question
   end 
end 

def find_like
 @like = Like.find(params[:id])
end 
```
* In the view 
```ruby
pluralize number, theword
<%= pliralize @question.likes.count, 'like' %>
```

### Authentication
in controller add 
before_action :authenticate_user!

in veiws
if user not sign in
<% if !user_sign_in? %

my question: like is model here? or action 
to stop we go to ability file 
can :like, Question do |question|
 question.user != user
end

cannot :like, Question do |question|
 question.user == user
end

*now back to controler and check 
if cannot? :like, @question 
 redirect_to @question, notice: 'cannot happen'

/// use font awesome
install for our application gem 'font-awesome-rails' 
font awesome rails add just use .css in github for that
inside application css, 
add *=require font-awesome on top of tree
then in rails we need just say fa icon and name of icon, 
fa_icon 'cammera'
because they are methods inside methos we put inside brackets 
fa_icon('cammera lg') gives bigger 


scss is complie to css, sass means there is whitespace indentation instead of brackets

### seeds for likes 

so we add lights at the same time questions created 


100.times do
  question = Question.create(title: Faker::ChuckNorris.fact,
                  body: Faker::Hacker.say_something_smart,
                  view_count: rand(1000),
                  user: users.sample
)
question.likers = users.shuffle.slice(0..rand(users.count))
end

//inside the rails console.
users = User.all
users.shuffle   change the order 

users.shuffle.slice(0..rand(users.count))  -- it gives back a range of numbers, also it gives me unique results  the result is an array of users
like: 
question.likers = [4,43,21]

at the button of seeds 
puts Cowsay.say("created #{Like.count}", :cheese) -- cheese are available for cowsay

http://www.gitcast.io/tkbeili/building-a-like-feature-many-to-many-with-rails
https://github.com/CodeCoreYVR/bootcamp_summary_notes/blob/master/week_08/like_many_to_many.md


# Part II Many to Many 

Votes we gonna have 
```ruby
rails g model vote user:references answer:references is_up:boolean
```
A column added as is_up, if it is true is up else is down, and add `, index: true` in migration in front of both foreign keys and inside vote model belongs to already created, 
* Now in both models define relation to middle table votes and then second like define a relationship through that table to reach another one 
Answer model 
```ruby
has_many :votes, dependent: :destroy 
has_many :voter, through: :votes, source: :user 
```

User model 
```ruby
has_many :votes, dependent: :destroy 
has_many :voted_answers, through: :votes, source: :answer
```
The relationship that users have with answers is how they voted the answers

in rails console:
```ruby
Answer.all
A = Answer.last
A.votes -- returns all votes related to this answer 
u.voted_answer << A  -- create an association in votes table 
Answer.first.voters << User.last -- it assigns a user to -- this one works from other side
```
* To Add restriction we define as: 
In Vote model 
```ruby
Validates :answer_id, uniqueness: {
scope: :user_id,
message: "has already been voted"
}
validates :is_up, inclusion: {in: [true, false]}
```
inclusion instead of present means whatever we give it to attribute either be true or false. 
in terminal
```ruby
u = User.last
Answer.first.votes << u
```
now it gives error because of validation which should be either true or false.  
### Assign attribute to middle table 
```ruby
Answer.first.votes.create(user: u, is_up: true)
OR
Answer.first.votes << Vote.create(user: u, is_up: true) *notice
```
*notice, in this part since it create first without answer referencing, so it first create inside the like and when want to assign answer to it, it fails
* Best practice to write assign attributes 
```ruby
Vote.Create(user: User.all.sample, answer: Answer.all.sample, is_up: true)
```
* Now go to View and question/show and add inside @answer do f form 
```ruby
<%= link_to fa_icon('arrow-up') %>
<%= @total %> 
<%= link_to fa_icon('arrow-down') %>
``` 
* Inside answer model or any model we want to pass object to `vote_total` function we define this funciton. Or we can make it a class method by just adding self. before method to be accessible for any object. 
```ruby 
def vote_total
  votes.where(is_up: true).count - votes.where(is_up: false).count
end 
```
* Calling the method we would have samething  
```ruby 
a = Answer.last
a.votes.where(is_up: true).count - a.votes.where(is_up: false).count
or
a.vote_total
```
If define function in User model or class method then we can assign user to function as well 
```ruby
u = User.last
u.vote_total
```
#### votes 
* `votes`, `likes` and all relational tables by passing objects return list of associated rows. 

In below for an array of answers inside `a` creat votes with rand users and rand is_up. Then run `a.vote_total` for total votes. 
```ruby
a = Answer.Where(created_at: (Time.now.midnight - 1.day)..Time.now.midnight)
a.votes.create(user:User.all.sample, is_up: [true, false].sample)
a.votes.down
a.votes.up 
```
> Hirb.enable

* Now inside the show
<%= f.vote_total %> 

* Here we successfully assigned and show the number of likes for each comment. 
-------
### Routes 
* Because answers are already nested in questions, therefore if votes or likes become nested inside answers then they would be third nested resource which is not suggested with Rails. Therefore we use `shallow` attribute and also add `only []` becuase we dont need have overridden routes for answers. For examlpe we already have `edit_idea_answer` to edit answer and without [] creates new path for answer to edit. 
Without creating any routes for answers. 
```ruby
resources :answer, only: [], shallow: true do 
  resources :votes, only: [:create, :destroy, :update]
end 
```
* only 3 action are required. 

*Votes are inside answer as nested routes and we set up an attribute in params with `is_up` object name and value `true` or `false` 
```ruby
link_to "up", answer_votes_path(answer, {is_up: true}), method: :post
link_to "down", answer_votes_path(answer, {is_up: false}), method: :post
```
* In both cases above it creates new row in like table for that answer. If we want a user to be able to update we should first find all votes for that user, then find votes for that answer and update it as below:
inside params[:id] is answer id
```ruby
def update
    u = current_user 
  	vote = u.votes.find_by(review_id: params[:id])
  	if(vote)
  	vote.update is_up: params[:is_up]
  	#vote.destroy -- or destroy
     redirect_to request.referrer, alert: 'you update!!'
  	end 
 end
```
* Also we can add create to the conditions that like or vote doesnt exist
* Votes controller 
```ruby
before_action :find_review, only: [:create]
befpre_action :find_vote, only: [:destroy]
 def create 
  vote = Vote.new(user: current_user, review: @review. is_up: params[:is_up])
  if vote.save 
    redirect_to @review.idea, notice: 'good'
  end
  render jason:params
 end
```
 redirect to `question_path(@answer.question)` is same as `@answer.question` because it redirects to instance model we can use short way

* show the color of botton 

```ruby
<% vote = review.votes.find_by(user: current_user) %
<% if vote.nil? %>
<% elsif vote.is_up? %>
  <%= link_to fa_icon('arrow-up'), vote_path(vote), method: :delete, class: 'active' %>
   <%= link_to fa_icon('arrow-up'), vote_path(vote), method: :patch %> -- it sends me to update 
<% else %>
<% end %>
```
## Tags 

Order the asnwers by votes, 

`rails g model tag name`
this is a relation between question and tags 
`rails g model tagging question:references tag:references`
now add indexes into tagging migration `,index: true`
usually we have a foreign key that search alot.

* Inside tag moel
```ruby
has_many :taggings, dependent: :destroy 
has_many :questions, through: :taggings 
validates :name, presence: true, uniqueness: {case_sensetive: false}
before_validation :downcase_name
private 
def downcase_name
  self.name.downcase!
 end 
```
* in Question model
```ruby
 has_many :taggings, dependent: :destroy
 has_many :tags, through: :taggings
```
* in question/new view page 
```ruby
form_for @question do |f|
<%= f.labe :tag_list, "tags " %>
<%= f.text_field :tag_list %>
 ```
*in question create controller we add `:tag_list` to require params 
*inside quesiton model we add a setter or virtual method , this is called attribute setter this means question.tag_list = 'something' it would call below 
```ruby
def tag_list=(value)
end 
```
By adding above we add one attribute to our params in form, the question doesnt have colum for tags, the form thinks question has tag colmun now 
* Inisde Idea model we added tag_list function.
```ruby
 has_many :taggings, dependent: :destroy 
    has_many :tags, through: :taggings
        def tag_list
	    # tags.map { |tag| tag.name }
	    tags.map(&:name).join(", ")
	  end

	  # We can create methods that are called `setters`. They
	  # simulate an instance attribute. When assigning a value to it,
	  # it is instead passed as argument to the method.
	  def tag_list=(value)
	    self.tags = value.split(/\s*,\s*/).map do |name|
	      Tag.where(name: name.downcase).first_or_create!
	    end
	  end
```
------
rails console
```ruby
tags = 'aaa,ddd,ds'
tags.split(/\s*,\s*/)  # remove anyspace, * as many as it is 
# it search first and if it can not find anything then created 
Tag.where(name: 'thins').first_or_create!
```
* Let the user automaticaly input tags, 
```ruby
tags.split(/\s*,\s*/).map do |name|
  Tag.where(name: name.downcase).first_or_create!
 end
```
 this create three tags right now, even if they exist it returns 
 put above inside tag_list=(value) 
 and equal to  self.tag = value.split(/\s*,\s*/).map do |name|
               Tag.where(name: name.downcase).first_or_create!
              end
self if we are writing to attribute of this , kind of refrencesing 

* the setter and getters tag_list helps us to devide the input users into a list and be able to save an assoicatied list to a question in join table which is tagging 
```ruby
@question.tag_ist to see the list 
```

in seeds 

```ruby
50.times do 
   tag = Tag.create(name: Faker::Book.genre)  
end 

tags = Tag.all
then inside question 
    question.tags = tags.shuffle.slice(0..rand(10))
```

## Git 
Git checkout -b newbranch
git push
inside `github` ask a `pull request` 
merge pull request added the branch to master 
we can revert the merge request

#### Git Rebase
* change the base of git, it is vert structive. 
git log 

git checkout -b a1 

git checkout -b b1

* here rebase branch b inside a, go inside branch a and rebase branch b as below:
```git
git rebase branch_b 
```
Now we may get conflift, so we go to file and modify it removing `<<<<<<<<<<<<<<<<` and `>>>>>>>>>>`inside the files and `git add .` and rung `git rebase --continue` for next commit unitl we get `git status` all same. 
Or we can have 
```git 
git merge branch_d 
``` 
with merge it shuffle in when you log in, so big differenes in rebase is time order would change in order to the way we add them to master branch but in merge the order automatically fix based on the last time they edited. 


git log --oneline  --graph 
git pull --rebase
git config 

#### VPS 
#### AWS
using ducker to deploy, you have your rails app inside that container and push it inside in AWS
Ducker EC2

### Git project

```git 
git add .
git commit -m "few changes"
git checkout -b newchagne
git  pull  https://github.com/RailsonFire/ROF.git 
git push origin newchange
```

# Project;

```ruby
<%= form_for [@question,@answer] do |f| %>
      <div class="">
        <!-- <%= f.label :body %> -->
        <%= f.text_area :body, class:'form-control nav-bar-forms' %>
      </div>
      <div class="">
        <%= f.submit "Submit", class:'btn btn-default red-button top-button-margin' %>
      </div>
    <% end %>
```
Notice: it submit the form  with  question/:id/answer params inside answer controller, then in create answer we can get it and work on it. 

while answer is nested inside question 


