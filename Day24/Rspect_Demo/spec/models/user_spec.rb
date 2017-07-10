require 'rails_helper'

# To run all test type rspec
# rspec spec/models/user_spec.rb
#OR

#  rspec spec/models/user_spec.rb:28 , which only run checks emails

# User is a class, 
RSpec.describe User, type: :model do
 # pending "add some examples to (or delete) #{__FILE__}"
 # is a method 
 # testign validation and title attriebue 
   def valid_user
    @user ||= User.new first_name: 'Jon', last_name: 'Snow', email: 'js@winterfell.gov'
    # @user =  @user || User.new first_na...
  end


    describe 'validation' do
        # check the first_name exist and last_name exits 
   # descibe is use only for our own sek and read ablitiy in future     
       describe 'first_name Exist?' do
        
	        it('first_name must be exist!') do
		         u = valid_user
       			 u.first_name = nil

		         u.valid?
		         expect(u.errors).to have_key(:first_name)
	        end 
       end

        describe 'last_name Exist?' do
        
	        it('last_name must be exist!') do
		        u = valid_user
		        u.last_name = nil

		        u.valid?
		        expect(u.errors).to have_key(:last_name)
	        end 
       end


        describe 'email' do 
    	    
    	    it('it must be present') do
    	       u = User.new
    	       # valid? runs the validation 
    	       u.valid?
               # errors should have key title 
               # we write acutal values inside expect 

               expect(u.errors).to have_key(:email)
               
    	    end  
    	    # this one 
    	    it 'must be unique' do
               u = User.create email: 'test@test.ca' 
               u1 = User.new email: 'test@test.ca'

               # when 
               u1.valid?

               #Then
               expect(u1.errors).to have_key(:email)
    	    
    	    end
    	end
    
    end
# # is convention and indication for mehtod instance
    
    describe '#full_name'
	    it 'combines first_name and last_name' do
	      u = User.new email: 'test@test.ca', first_name: 'Jon', last_name: 'Snow'

          # then (use the full_name)
            expected_value = u.full_name;
            expect(expected_value).to eq('Jon Snow');
         
      #       it 'trims white space' do
		    #   u = User.new email: 'test@test.ca', first_name: '  Jon', last_name: '  Snow  '
		    #   expected_value = u.full_name
		    #   expect(expected_value).to eq('Jon Snow')
		    # end
    
    end 

end












