# Many to Many 

has_and_belongs_to_many 
means that the join table woold not have a corresponding model, but the associated table is not accessable, we use another way 

create join table and access it,
so it is like 'like' table among users and questions

* Connecting togather through a table togather  
`rails g model like user:references question:references` 
* Then we add , `,index: true` in migrations in front of foreign keys because searching through these foreign keys are always happen
Now the model likse has its own associations, but we still have to add below to both user and question models 
`has_many :likes, dependent: :destroy`
* depenedent :destroy means when user deleted all the likes are gone
*In console we have :
`l = Like.new user: User.first, question: Question.first`
l.question gives the question associtated to it
l.user.likes gives all the likes user have 
`u = User.first
u.likes
u.likes.create question: Question.first(2).last`
it is not went to many to many so far 

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
`q = Question.last(10).first
q.likers << User.all.sample
q.likers
q.likes -- corresponding likes 
q.liker_ids 
return the ids 
q.liker_ids = [12,32,43[ to overwriete 
q.likes.destroy_all -- remvoe all `

q.likers = User.where(first_name: 'jon) it returns an array of users 

activerecord collection has its own << which are really commands that everyone can define them or costomize them.


to avoid a user to like a thing twice we use validation 

#### in like model

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
// this 
message: ->(object, data) do {"#{data[:object]}"}
end

// craete  a button like in API
add a button, 

likes would be nested in question 
<%= link_to 'Like', question_likes_path(@question), method: :post %>
<%= @question.likes.count %> likes

inside resource :question
resources :likes, only: [:create, :destroy]

rails g controller likes 

// need it 
rails help g

we can skipp coffee scripts or extra

rails g conttroller --help

--no-assets --skip-routes --no-helper 

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

* Adding another button only if the question is liked, 

in view we add below unlike and pass the like id 
<% like = @question.likes.find_by(user: current_user) %>
<% if like.present? %>
  <%= link_to 'unlike', question_like_path(@question, like), method: :delete %>
<% else %>

now question inspect has both qustion and like ids, 

---- 
inside the controller 
def destroy
   if @like.destroy 
     redirect_to @like.question
   end 
end 

def find_like
 @like = Like.find(params[:id])
end 

inside the view 

pluralize number, theword
<%= pliralize @question.likes.count, 'like' %>

/// users authentication better to be in controller then people can not 

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
a column added as is_up, if it is true is up else is down, and add `, index: true` in migration in front of both foreign keys

inside vote model belongs to already created, 
Answer model 
```ruby
has_many :votes, dependent: :destroy 
has_many :voter, through: :votes, source: :user 
```
User model 
```ruby
has_many :votes, dependent: :destroy 
has_many :voted_answerts, through: :votes, source: :answer
```
The relationship that users has with answers is how they voted the answers

in rails console:
```ruby
Answer.all
Answer.first.voters << User.last
```
* It assign one user to answer inside like table 
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
now it gives error because of validation 

```ruby
Answer.first.votes.create(user: u, is_up: true)
OR
Answer.first.votes << Vote.create(user: u, is_up: true) *notice
```
*notice, in this part since it create first without answer referencing, so it first create inside the like and when want to assign answer to it, it fails
* Among all this way is more useable in controllers
```ruby
Vote.Create(user: User.all.sample, answer: Answer.all.sample, is_up: true)
```

* Now go to View and question/show and add inside @answer  do f form 
```ruby

<%= link_to fa_icon('arrow_up') %>
<%= %> 
<%= link_to fa_icon('arrow_down') %>
```

*Answer model
```ruby 
def vote_total
  votes.up.count - votes.down.count 
end 
```
* Vote model 
The class methods need self before the name. We create a self method to be accessibel everywhere
```ruby
def self.up
  where(is_up: true)  
end 

def self.down
 where(is_up: false)
end 
```
```ruby
a = Answer.last
a.votes 
a.votes.up
a.votes.create(user:User.all.sample, is_up: [true, false].sample)
a.votes
a.vote_total 
a.votes.down
a.votes.up 
```
* Now inside the show
<%= f.vote_total %> 


some csss
.voting_widget {
width: 75px;
display: flex;
flex-shrink: 0;
flex-flow: column;
aligh-item: center;
width: 100px;
justify-content: center;    -- it makes it 
}

.answer-list > li {
 display: flex;
 margin: 5px 0;  -- it margines top & bottum and zero asides 
}



flex-shrink is 1 by default 

----
in routes:

*votes are inside answer so nested routes 
```ruby
link_to "up", answer_votes_path(answer, {is_up: true}), method: :post
link_to "down", answer_votes_path(answer, {is_up: false}), method: :post
```
is_up we set an attribute, and we added in params 


notice: rails put the params as get although we said is post in url top
```ruby
resources :answer, only: [], shallow: true  do 
  resources :votes, only: [:create, :destroy, :update]
end 
```
votes controller 
```ruby
before_action :find_answer, only: [:create]
befpre_action :find_vote, only: [:destroy]
 def create 
  vote = Vote.new(user: current_user, answer: @answer. is_up: params[:is_up])
  if vote.save 
    redirect_to @answer.question, notice: 'good'
  end
  render jason:params
 end
 
 def destroy 
  ender jason:params
 end
 
  def update 
   ender jason:params
  end
 
  def find_asnwer
    @answer = Answer.find(params[:answer_id]
  end

```

if it gets a model instance, redirect to `question_path(@answer.question)` is same as `@answer.question`


