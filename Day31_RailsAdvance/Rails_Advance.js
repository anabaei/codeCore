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

inside compaign controler rspec

/// reouserces :compaignes, only: [:new, :create, :destroy]
describe '#create' do
    it 'creates a new campaign in the database'do
      count_before = Campaign.count
      post :create, params: { campaign: FacotoryGirl.attributes_for(:campaign)}
      counter_after = Campaign.count
      expect(count_after).to eq(count_before +1)
end 

//then here we notice that we need factory girl to produce data in controller

inside factories folder, create campaigns.rb file and add below codes
///
FactoryGirl.define do 
  factory :campaign do
    sequence(:title) { |n| "#{Faker::Coffee.blend_name} #{n}"}
    body {Faker::Coffee.notes}
    goal { rand(1000..500_000)}
    end_date {Faker::Date.between(a.month.from_now, 1.day.from_now)}
  end 

end 


//// check whether it goes to to go to show pge  
 
 it 'redirects to the campaign show page' do 
     post :create, params: { compaign: FacotoryGirl.attributes_for(:campaign)}
     expect(response).to redirect_to(campaign_path(Campaign.last))
    end 

// at the buttom of factorygirl we see the lines 
  // then we go to crete action
  and add byebug 

request and response are massive when we use bybug 
response.status 

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



///  testing user authntication 
add has secure password 

//on top of the rspec campaigncontroller 

  describe '#new' do
    describe 'with no user sign in' do
      it 'redirects to the sign in page' do
        get :new
        expect(response).to redirect_to(new_session_path)
      end
    end

    describe 'with user signed in' do
      before do
        request.session[:user_id] = FactoryGirl.create(:user).id
      end

end 

// now go to user factory and uncomment the password 


FactoryGirl.define do 
  factory :user do 
     first_name {Faker::Name.first_name}
     last_name {Faker::Name.last_name}
     sequence(:email){|n| Faker::Internet.email.gsub('@',"-#{n}@")}
     password 'super'
  end 

end 


//// then back to complete 
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





