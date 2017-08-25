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
* Next after embeding javascript inside payment.js.erb then we have to create `elemenst`
* user const instead of var 
https://stripe.com/docs/elements
copy the form and inside the payament/new
```ruby
<form action="/charge" method="post" id="payment-form">
  <div class="form-row">
    <label for="card-element">
      Credit or debit card
    </label>
    <div id="card-element">
      <!-- a Stripe Element will be inserted here. -->
    </div>

    <!-- Used to display form errors -->
    <div id="card-errors" role="alert"></div>
  </div>

  <button>Submit Payment</button>
</form>
```
remember these id tags are important for strips so dont change them. 
* now we mount the information based on doc inside javascript.js.erb `const card = elements.create('card', {style: style});
card.mount('#card-element');` it would be like 
```ruby
$(document).ready(function(){
  const stripe = Stripe('<%= ENV['STRIPE_PUBLISHABLE_KEY'] %>');
  const elements = stripe.elements();

  // this will load the credit card form information in the div with id:
  // card-element
  const card = elements.create('card');
  card.mount('#card-element');
});
```
then you can pick a test cards as this link 
https://stripe.com/docs/testing
* then go to step 3 and use the javascript and copy paste to your js
```javascript
Step 3: Create a token to securely transmit card information
```
* Only change the last line to `console.log(result)` instead of `striptokenthandler()`. so far it just send the valid info to strip and strip send toket to our rails so no payment check so far just valid cc. 
so we should see now our `token.id`

### now add another form 
```ruby
<%# this form submits the token to our server (payments / create) %>
<%= form_tag tip_payments_path(@tip), id: 'server-form' do %>
  <%= hidden_field_tag :stripe_token %>
<% end %>

```
and assign new action inside payment controller 
```ruby
def new 
   @tip = Tip.find params[:tip_id]
end 
```
then inside the payment.js get the tokenid and submit it
```javascript
$('#stripe_token').val(result.token.id);
        // This will submit our server form to our Rails backend
        $('#server-form').submit();
```
* now here we have the single token that we can use it to charge the user 

### Now we have a token and need ruby stipe gem 
* Add 
```ruby
stripe `gem`
```
then set up api key https://stripe.com/docs/api/ruby , just one thing as we do below 
create confic/initializer/seupt_stripe.rb and put here 
```ruby
Stripe.api_key = "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
```
then it set up private key for stripe.  
this nice link gives us charge or balance mehtods. But if you creaet a customer then you can save the user info instead of only one charges. 
## To do Charges
check charges pass amount current token and description
take snippest and put inside payment controller creeate as below , amount is based on cents so we multiple by 100 
```ruby
def create
    @tip = Tip.find params[:tip_id]
    Stripe::Charge.create(
      :amount => (@tip.amount * 100),
      :currency => "cad",
      :source => paramsp[:stripe_token], # obtained with Stripe.js
      :description => "Charge for #{tip.id}"
    )
     @tip.update(txn_id: charge.id)
    render json: params
  end
```
also we can use new formats as `=>`
```ruby
currency: "cad",
```
* now it is working, if you go to strip dashboard it displays 
* now store that id 
```ruby
 @tip.update(txn_id: charge.id)
```
if you want to refunding you can access to that transaction id and that work for that 
___________

When you dealing with gems and APIs need to handle expceptions. 
```ruby 
begin 
    # normal actions 
rescue =>e
    # we get here if an exception happens 
    flash.now[:alert] = "Error: #{e.message}"
end
```
* On testing we can get different errors 
* if controller become bigger then create a self method class inside model. Look at `Service object` to have controller thin while you dont have model. 



* 30 second about your projects
* 1.5 about what features 
* 1 minutes about a technical feature, post man 
* have a road map dont say eeeee lets go this page! lets go this page show code the way you want to just show it! show something that people are interested in. make sure that snipet code is very good. 





