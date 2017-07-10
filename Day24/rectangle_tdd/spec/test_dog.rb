require './dog.rb'


  RSpec.describe Dog do
         describe 'give_bone' do 
         it 'returns the number of bones ' do 
         dog = Dog.new
         expect(dog.has_bones)
         end 

  end 
