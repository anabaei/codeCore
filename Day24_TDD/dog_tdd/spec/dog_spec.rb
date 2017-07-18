require './dog.rb'

RSpec.describe Dog do
  describe 'give_bone' do
    it 'returns the number of bones the dog has' do
      dog = Dog.new
      expect(dog.give_bone('small')).to eq(1)
    end

    it 'cannot have more than 3 bones' do
      dog = Dog.new
      dog.give_bone('one')
      dog.give_bone('two')
      dog.give_bone('three')
      dog.give_bone('four')
      dog.give_bone('five')
      expect(dog.bones.count).to eq(3)
    end

    it 'returns the name of the last bone that was added' do
      dog = Dog.new
      dog.give_bone('one')
      dog.give_bone('two')
      dog.give_bone('three')
      expect(dog.eat_bone).to eq('three')
    end

    it 'removes a bone from the bones collection' do
      dog = Dog.new
      dog.give_bone('one')
      dog.give_bone('two')
      dog.give_bone('three')
      dog.eat_bone
      expect(dog.bones.count).to eq(2)
    end
  end

  describe 'bone_count' do
    it 'return the number of bones the dog has' do
      dog = Dog.new
      dog.give_bone('uno')
      dog.give_bone('dos')
      dog.give_bone('tres')
      expect(dog.bone_count).to eq(3)
    end
  end
end