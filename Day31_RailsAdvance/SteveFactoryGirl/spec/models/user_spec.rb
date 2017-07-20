require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    describe 'email' do
      it 'requires presence of' do
        # GIVEN: A new user object without an email
        u = FactoryGirl.create(:user)
        u.email = nil

        # WHEN: We invoke validations
        u.valid?

        # THEN: We get an error on the email field
        expect(u.errors.messages).to have_key(:email)
      end

      it 'must be unique' do
        # GIVEN:
        u0 = FactoryGirl.create(:user)
        u1 = FactoryGirl.build(:user)
        u1.email = u0.email

        # WHEN: We invoke validations
        u1.valid?

        # THEN: We have an error on the `email` field
        expect(u1.errors.messages).to have_key(:email)
      end
    end
  end
end
