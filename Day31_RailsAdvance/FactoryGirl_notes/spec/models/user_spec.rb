require 'rails_helper'

RSpec.describe User, type: :model do
#  pending "add some examples to (or delete) #{__FILE__}"
 describe 'validations' do
    describe 'email' do
      it 'requires presence of' do
        # GIVEN: A new user object without an email
        u = User.new

        # WHEN: We invoke validations
        u.valid?

        # THEN: We get an error on the email field
        expect(u.errors.messages).to have_key(:email)
      end

      it 'must be unique' do
        # GIVEN:
        u0 = User.create(first_name: 'Jon', last_name: 'Snow', email: 'js@winterfell.gov')
        u1 = User.new(first_name: 'Cersei', last_name: 'Lannister', email: u0.email)

        # WHEN: We invoke validations
        u1.valid?

        # THEN: We have an error on the `email` field
        expect(u1.errors.messages).to have_key(:email)
      end
    end
  end

end
