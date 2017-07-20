require 'rails_helper'

RSpec.describe User, type: :model do
  def valid_attributes(new_attributes = {})
    attributes = {
      first_name: 'Jacky',
      last_name: 'Chui',
      email: 'jc@example.com',
      password: '123456'
    }

    attributes.merge(new_attributes)
  end

  describe "Validations" do
    it "requires a first_name" do
      user = User.new(valid_attributes(first_name: nil))
      expect(user).to be_invalid
    end

    it "requires a last_name" do
      user = User.new(valid_attributes(last_name: nil))
      expect(user).to be_invalid
    end

    it "requires a email" do
      user = User.new(valid_attributes(email: nil))
      expect(user).to be_invalid
    end

    it "requires an unique email" do
      User.create(valid_attributes)
      user = User.new(valid_attributes)
      expect(user).to be_invalid
      # user.save
      # expect(user.errors.messages).to have_key(:email)
    end

    it "requires a valid email" do
      user = User.new(valid_attributes(email: 'blahblahblah'))
      expect(user).to be_invalid
    end
  end

  describe "full_name method" do
    it "returns the first name and last name concatenated and titleized" do
      full_name = "#{valid_attributes[:first_name]} #{valid_attributes[:last_name]}"
      user = User.new(valid_attributes({first_name: 'jacky', last_name: 'chui'}))
      expect(user.full_name).to eq(full_name)
    end
  end
end
