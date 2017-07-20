// we gonna see how to test controllers
 // create a user 
 rails g model user first_name last_name email password_digest
 rails db:migrate

// we wanna add some features and test them

// so we go to user spec which is almost empty

// first test for validation 

describe 'validation' do 

end  

// then write to check an email is present first

 describe 'validation' do 
    describe 'email' do 
    	it 'requires' do 
    	 u = User.new

	      u.Valid?

	      expect(u.errors.message).to have_key(:email)
        
    	end 

    	it 'must be unique' do
          u0 = User.create(first_name: 'Jon', last_name: 'Snow', email: 'js@winterfell.gov')
          u1 = User.new(first_name: 'Cersei', last_name: 'Lannister', email: u0.email)

    	 // to invoke validation 

         u1.valid?
          expect(u.errors.messages).to have_key(:email)
    	end 
    
  end 

  /// given a new user object wihtout an email and check 
  // then we invoke validation, it triggers it to see we have that error
  // 

// inside it 'requiers' do
      // create a user without email 
      // u = User.new

      // u.Valid?

      // expect(u.errors.message).to have_key(:email)
 //  end

// add catnyan to .rspc and to gem have nicer message
 // right now all these fails because we dont have such a message from model validations
 // now we add validations in models and after that it should pass 
  validates :email, presence: true, uniqueness: { case_sensitive: false }
 

/// Factories always should access the valid factories
// we use a gem named factory girl 

// get the FactoryGirl module,
/////////////////////////////////////////////////////////////////////////////
////////////////////////// Tam Notes ///////////////////////////////////
https://github.com/CodeCoreYVR/bootcamp_summary_notes/blob/master/week_07/rspec_with_rails_controllers.md
/////////////////////////////////////////////////////////////////////////////////////
https://relishapp.com/rspec/rspec-rails/v/3-6/docs/ gem install factory_girls_rails 

/// ------------------------ First part ----------------------------

FactoryGirl.define do
// inside of this we gonna define factory and we gonna have one and we call it a user
  factory :user do
  // so we run it to generate a first name. In order to generate a value for first_name we have to put it inisde block
    first_name { Faker::Name.first_name  }  
    last_name { Faker::Name.last_name }
    // becuase our email is unique, 
    // even when we use faker there is no guarantee we dont get same email, 
    //everytime it runs then add one, we use sequence method, so we use sequence method to add one everytime 
    // inside sequence method we tell which attribute we want to use, then we gonna pass a block that the block gets a numner as argument
    // so n would be 0,1,2,... 
    // gsub replace the email with -n@ everytime 
    sequence(:email) { |n| Faker::Internet.email.gsub('@', "-#{n}@") }
  // or we can set value as below 
    password 'supersecret'
  end
end

/// 
// now we can test it inside rails console
// FactoryGirl --> returns FG
// FactoryGirl.create(:user) --> should work
// FactoryGirl.build(:user)
// we can add this to our seeds to create 10 times users, but we usually use it in test


// it gives attributes as user to create a params.
FactoryGirl.attributes_for :user 
//params is a just a hash. it uses when we test user create action, when we want to create 
// a user we have to send a params of the user and normaly these params comes from forms, but here 
// we can have them independently from views. 

/// ---------------------------- no part ---------------------------- ///

define factories
then pass a block and pass variables to factory 
you may want to test a user as a model 

// on heroku only gems on production are run, and not on test and development
facotry_girl create model instances 

inside spec create another folder and call it factories

create factory fro users name, name user.rb 

// Ruby
// find the @ and replave it with -1@ 
e.gsub('@', '-1@')

after creating the factories folder and users.rb inside all in rspec then 
we run this in rails c
FactoryGirl.build(:user)

///
build is like new in here, 
///

// it gives attributes as user to create fake params 
FactoryGirl.attributes_for :user 
// if want to create a user they comes from 

// now create a compaigns controller 
now we go to rspec controller and write for actions


/// ---------------------------- second part ---------------------------- ///
// inside compaign controler rspec
//  test get method action which is defined in Rspec 

describe 'check the get action ' do
      it 'redirects to the sign in page' do
      // Rsepct rails comes with methods to symulate web requests to your application, these include get, post, delete , patch 
      // this symulate get request to the controller 
        get :new
        // it just check redirect_to has that destination has been requested.
        expect(response).to redirect_to(new_session_path)
      end
    end
// if routes were not mathes then we set them up 
// reouserces :compaignes, only: [:new, :create, :destroy]
// we should have new template and new action in controler

//Notice: all symbols in our app will be refered to the same one in our app. 
// symbols are like identifiers that identify things, symbols are values and not variables and never they gonna change


/// ---------------------------- Third part ---------------------------- ///

describe '#create' do
    it 'creates a new campaign in the database'do
   /// test database reset everytime , so first we check how many compaign we have 
      count_before = Campaign.count
   // we gonna make a post to create, we gonna get params to the post and has to be same shape as it appears in form  
   // we could make it manual without needing Factory girl but to generic random data we use FG
      post :create, params: { campaign: FacotoryGirl.attributes_for(:campaign)}
   // then check the count
      counter_after = Campaign.count
      expect(count_after).to eq(count_before +1)
end 

//then here we notice that we need factory girl to produce data in controller
// railg g model rspec:factories modelname
//inside factories folder, create campaigns.rb file and add below codes
/// Factorygirl define compaign 

FactoryGirl.define do 
  factory :campaign do
// since tilte has to be unique then we use sequence 
    sequence(:title) { |n| "#{Faker::Coffee.blend_name} #{n}"}
    // then add the body 
    body {Faker::Coffee.notes}
    // this is a money random 
    goal { rand(1000..500_000)}
    end_date {Faker::Date.between(1.month.from_now, 1.day.from_now)}
  end 

end 
// then you can check it via rails console by 
// FactoryGirl.create(:compaign)

/// ---------------------------- no part ---------------------------- ///

//// check whether it goes to to go to show pge  
 
 it 'redirects to the campaign show page' do 
     post :create, params: { compaign: FacotoryGirl.attributes_for(:campaign)}
     expect(response).to redirect_to(campaign_path(Campaign.last))
    end 

  // at the buttom of factorygirl we see the lines 
  // then we go to crete action
 // we can add byebug to controller while even using rspec
 // then request and response are massive when we use byebug response.status 

// To wtite 
// for the empty params to test 
before do
  post :create, params: {campaign:{}}
end
//then 

it 'checks the wrong' do
  expect(Campagin.count).to eq(0)
end


it 'renders '
 expect(Campaign.count).to eq(0)


/// ---------------------------- Fourth part ------------------------------ ///
///  testing user authntication 
add has secure password to user model 

//on top of the rspec campaigncontroller 
// all the scenario we have conevered so far, it assumes user sign in 
// but now we devide it into two different scenrios 
// we gonna have situation that no user sign in 
// firt we need to define user either ways of below   
   def user
      @user ||= FactoryGirl.create(:user)
   end

   The pattern above is so common that RSPEC provides an helper
   to create it. The code below 👇 is essentially equivalent to the
   above 👆
  let(:user) { FactoryGirl.create(:user) }
// both above makes user equals to above random functions 


  describe '#new' do    
    describe 'with no user sign in' do
      it 'redirects to the sign in page' do
        get :new
        expect(response).to redirect_to(new_session_path)
      end
    end

// It means before any request inside below scenario, user has to be initialized
// request.session helps to get session object inside our test and we gonna put our user id there
// in this way we create a user and puts it's id inisde session 
    describe 'with user signed in' do
	      before do
	        request.session[:user_id] = FactoryGirl.create(:user).id
	      end
	      // the rest below are all actions we need to be done while user is sign in
         //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         /////////// code come from below \\\\\\\\\\\\\\\\\\
         //////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    end 

// now go to user factory and make it like this: 
FactoryGirl.define do 
  factory :user do 
     first_name {Faker::Name.first_name}
     last_name {Faker::Name.last_name}
     sequence(:email){|n| Faker::Internet.email.gsub('@',"-#{n}@")}
     password 'super'
  end 
end 

//// then back to complete 
//////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////// Add in above window \\\\\\\\\\\\\\\\\\
//////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

     it 'renders the new template' do
        get :new
        expect(response).to render_template(:new)
      end


///// ----------------------------  no part  ---------------------------- ///////
/// aplication controller user ////
application controller should be like tht 
 protect_from_forgery with: :exception
  before_action :authenticate_user!

  def user_signed_in?
    session[:user_id].present?
  end
  helper_method :user_signed_in?

  def current_user
    @current_user ||= User.find session[:user_id]
  end
  helper_method :current_user

  def authenticate_user!
    unless user_signed_in?
      redirect_to new_session_path, notice: 'Please sign in'
    end
  end
on tope of application controller we add before_action authntication

// two below codes are equivelant becuase they work 
// at the same time togather, so user only created once

   def user
     @user ||= FactoryGirl.create(:user)
   end

  let(:user) { FactoryGirl.create(:user) }

desctibe do 
   describe do 
    it 
   end 
end 

/// create action of the submit form we get all data from 

// when we say assigns(:sth) 
//it means like it :product --> @product = prodcut.find(:id)

expect(assigns(:product)).to eq(name)



