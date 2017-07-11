
### MiniTest 
####  A base test is a kind of unit testing for checking ruby files, models, databases
#### Above that we have another layer which we have more functionality testing  controllers. Since controllers are brought everything togather we test if everything is render correctly or user has been redirected or the response to the user is authorized
#### another layer above that is functional test and testing as if a user is actually changing things, clicking on browser.  

# TDD with RSPECT 
it uses for Rails app and has its own features to help testing 
#### Create RSPEC_Demo

* To manually created we have 
after adding gem 'rspec' into Gemfile

      Rails new rspec_demo -T
      Install rspec gem 
      Rails g rspec install

we can testing controllers, models comprehensively by rspec to see what they renders to views which model is accessible etc ..

setup databse and environment for our testing
create a model and validation of that model

    rails db:create RAILS_ENV = test
    rails g model user first_name last_name username email password_digest 
    rails g rspec:model user // which recreate the file
    
    
 Right now we can test by typing rspec which of course is empty right now!

#### Now automatically it created rspec folder, and inside rspec folder there is model which created inside that model rspec helper where we create our test.
    
#### To run on specific line we have
 to run our test on rails we can just run rspec, if we want to use it colorfull we deploy -p    
    
    rspec      
    rspec rspec/models/user_spec.rb:6

#### To test we write test command in spec/models/user.rb. Whenever an instance of a class is created then Rails exactly goes into the model of that class therefor we need to put all validations inside that model and then we access to all methods of that model.   It knows should go to which model. 
##### Describe is a method to break down our tests into sections and 'it' is a method and everything between do end is a block to do test, the block  is like a call back. 

For example inside : 
inside /spec/models/user_spec.rb 

    require 'rails_helper'
    
    # User is a name of model class, 
    RSpec.describe User, type: :model do 
      
      #test last_mame validation
      describe 'last_name Exist?' do
	        it('last_name must be exist!') do
		        u = User.new
		        u.valid?
		        expect(u.errors).to have_key(:last_name)
	        end 
       end
    
    end 

inside the model/user.rb 

	  validates :email, presence: true, uniqueness: true
	  validates :first_name, :last_name, presence: true

	  def full_name
		"#{first_name} #{last_name}"
	  end 

#### Beside checking vlidation, we can check the functionality like this. We check functionality of full_name. 
#### We add # in front of the name of method as convention to define a function. 

     describe '#full_name'
	    it 'combines first_name and last_name' do
	     u = User.new email: 'test@test.ca', first_name: 'Jon', last_name: 'Snow'
	     
            # then (use the full_name)
            expected_value = u.full_name;
            expect(expected_value).to eq('Jon Snow');
    
     end 
#### All above were inside  RSpec model do therefore they go directly to that model.



usfulle links:
https://github.com/CodeCoreYVR/bootcamp_summary_notes/blob/master/week_05/rspec_with_rails_models.md
https://relishapp.com/rspec/rspec-expectations/v/3-6/docs/built-in-matchers
