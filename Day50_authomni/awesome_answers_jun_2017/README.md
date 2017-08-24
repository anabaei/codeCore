# Stripe Rails 


find_each is better appraochm because unlike find all it does not get all result which may crash our app if the all are too many. 

* Take all questions and publish them 
* run in console 
```ruby
Question.find_each {|q| q.publish!}
```
* If you put answer a question you can tip him, it takes you to payment page and set the amount and if payment went through takes back the user
* So create a tip model based on users and answers with relation one to many. 
```ruby
rails g model tipe user:references answer:references amount:money txn_id:string  
```
* if a user has been removed we want to have track of tips so we define nullify for has_many and optional true for belongs to 
```ruby
belongs_to :answer, optional: true 
```
```ruby
has_many :tips, dependent: :nullify
```
create tips resources inside answers
* in controller we have authenticate_user! action which we want valid users to be able to do that 
```ruby
def create
    @answer = Answer.find params[:answer_id]
    @tip = @answer.tips.new tip_params
    if @tip.save
      # redirect to payments page
      render plain: 'should redirect to payments page'
    else
      render :new
    end
  end
```
```ruby
def new
    @answer = Answer.find params[:answer_id]
    @tip = Tip.new
  end
```
linke from each answer to tip page 
```ruby
   <%= link_to 'Tip', new_answer_tip_path(answer) %>
```
* Tip page 
```ruby
<h1>Send a Tip</h1>
<%= simple_form_for [@answer, @tip] do |f| %>
  <%= f.input :amount, , as: :string %>
  <%= f.submit class: 'btn btn-primary' %>
<% end %>
```
simple form tries to guess the type of input, so simple_form guess it is number whil it is number so we manually tells 
```ruby
def tip_params
    params.require(:tip).permit(:amount)
  end
```
update tip model as 
```ruby
  belongs_to :user, optional: true
  belongs_to :answer, optional: true
  validates :amount, presence: true, numericality: { greater_than: 0 }
```
#### Create an account on stripe 
https://stripe.com/ca 

and on dashboard look at view test data. 
pci compliance means all data stores incrypted, so if you want to handle user credit cards. Ideal scenario is avoiding any sensitive data going to our server. 

Alick on the APi on strip, then youu have two public key and secret keys. 
on server when we connect to strip we use private key but users uses public key to pay transactions to strip key.

now inside api_key.rb

NOTICE PUBLISHABLE A key start with pk and another one 
ENV['STRIPE_PUBLISHED_KEY'] = 'PK_749HF4U8Y48YTGNHG54YGHHG4' 
ENV['STRIPE_SECRET_KEY'] = 'SK_9479RU9 HFUIH34FHU43HIU'

* Go to stipe.js references 
https://stripe.com/docs/stripe.js

so follow the steps 
```javascript
<script src="https://js.stripe.com/v3/"></script>
```
### create anotehr payment controller 
user payment token has user information and also tips id. So payment is inside tip 
then inside tip controller which if tips were corrected and saved then we want to redirect to payment page  
```ruby
if @tip.save
      redirect_to new_tip_payment_path(@tip)
    else
```
### create payment.js.erb inside javascript folder in assets 
so every controller we create it comes with coffee.js file which here we change the name of payment.cofee to payment.js and inside that we have to set up stipe key copy from stipe doc, so we need to get it from our application environment  
```javascript
const stripe = Stripe('<%= ENV['STRIPE_PUBLISHABLE_KEY'] %>');
```
```ruby 
$(document).ready(function(){})
```


