One to Many Associations:

one to one  example:-- user per a profile,



rails g model answer question:reference body:text

it tells question has foreign key, 

then it creates db for us, 

then we add index:true in front of that, 
index then create a data structure that its default is binary search with log(n) fast

then run the migration 

# belongs to can be optional 
belongs_to :question, optional: true


// these both are the same 
Question.find(a.question_id)
a.question 
http://guides.rubyonrails.org/association_basics.html#belongs-to-association-reference

// 
Has many 
http://guides.rubyonrails.org/association_basics.html#the-has-many-association

q is the one question
q.answers << Answer.create(body: 'tow')
q.answers // gives back all the answers belongs to that question

.to_formatted_s 


# POST /questions/5/answers
Nested resource 

in console we c we have app object 

// parent resource is question and child is answer 
app.question_answers_path(quesiton_id)

// each quesiton has many ids so we can define it as it is. 

resource :questions do
   resource :answers  , only: [:create, :destroy]
end 


inside the form because we want to have form for the each question belongs to each answer,
then we have to write it as 

<%= form_for [@question, @anwer] do |f| %>
  <% f.text_area :body %>
<% end %> 


def create 
 question = Question.find params[:quesiton_id]
 /// it means only one parametr as body is permited through the params 
 answer_params = params.require(:answer).permit(:body)
 
 // answer = Answer.new(answer_params)
 // answer.quesiton
 //render json: params
end 


/// 
validates :body, presence: true

we can use render by any display by providing the path, then for validation since we 
render the page, we have to intiialize all @ansers and other local variables 


now for delete


helpers:
simple function to refactor our code, the error messages to refactor the code, 
// search for rails content_tag 
<%= errors_for @answers %>

def errors_for(model)
  content_tag :div, somefunctions 
  some functions 

end 


html skip// by defaults strings returns from hlper method are escaped, 
// meaning special charactors are not interepreted as HTML
def htmlsafe
 '<div class="somehting"> this is what you want </div>'.html_safe 
end

it tell rails none of the charactors are not to be skipped and they are html_safe


Refrence Delete:

in has many: 
it delete all associated answers to question be deleted 

// will update the question_id in all associated answers to null
dependent: :nullify 
we can tell it dependent: :destroy 

if we go to answr controllers 

	////////////// Dom  

Day 27 Dom Manipulation

Document object model, 
is just taking an html we write and transfer to browser. 

Tag is just a text
but a node is DOM object which is transfer to browser. 

the very top node is document, you can type node inside console chrom, 

console.dir(document)
javascript representation of DOM, it convert DOM to an object javascript, 
even html is. 

$0 each node has a number, which works like an onject.

It can be used instead of any object instead of  document except getelementbyid, other get elements
work decsendending. 


team[0].getelemensbyclass('name')

// it returns the first match 
document.querySelector('.doggo:last-of-type') 

document.querySelector('.doggo > .myname last-of-type')  
 class myname should be a child of doggo wihtout any div between
document.querySelector('.doggo  .myname last-of-type') 
 it covers all myname classes nested inside of doggo class 

document.querySelector('.doggo:last-of-child') 
document.querySelector('.doggo:not(last-child)') 


document.querySelectorAll('.team')

/// the fastest selection is not query selector, it is getelemenbyid and is O(1). 



















