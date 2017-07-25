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

u = User.first
u.likes
u.likes.create question: Question.first(2).last
* it is not went to many to many so far 
Now we add inside user model
we come out with a name that shows all questions likes , through likes tells which table is accociated, source is saying from where we get them. through likes it goes on top has_many likes 
`has_many :liked_questions, through: :likes, source: :question`

u = User.first
u.liked_questions it gives the questions user has liked
u.like_questions << Question.last
Like.all 
u.liked_questions 

if we put liked_questions before has_many we get error. Through association must be define before, 

* Now lets go to question model,
`has_many :likers, through: :likes, source: :user`

in console.

q = Question.last(10).first
q.likers << User.all.sample
q.likers
q.likes -- corresponding likes 
q.liker_ids 
return the ids 
q.liker_ids = [12,32,43[ to overwriete 
q.likes.destroy_all -- remvoe all 

q.likers = User.where(first_name: 'jon) it returns an array of users 

activerecord collection has its own << which are really commands that everyone can define them or costomize them.
