require 'rails_helper'

# We use `RSpec.describe` to define the subject of our test which is in this
# case the `Campaign` model. We can also shorten it for `describe` and you can
# also use it to set a group of tests as we will see below.
RSpec.describe Campaign, type: :model do

  # it's a good idea to group related tests together using `describe` or
  # `context` which are functionaly the same but semantically different
  describe 'validations' do

    # to define a test in RSpec we use `it` or `specify` methods and we should
    # give them descriptive texts. The `it` and `specify` methods take in a
    # block of code which contain your actual test code.
    # We call this a test example or test scenario
    it 'requires a title' do
      # GIVEN: a new campaign with no title
      c = Campaign.new

      # WHEN: You invoke validations on the campaign
      c.valid?

      # THEN: There is an error attached on the title of the campaign

      # We use `expect` to check the outcome of tests in RSpec
      # We usually call `to` on the `excpet` with a `matcher` in this case
      # the matcher is `have_key` which checks if a Hash has a particular key.
      # RSpec and RSpec Rails come with many matchers that make checking outcome
      # easier.
      # expect(c).to be_invalid
      expect(c.errors).to have_key(:title)
    end

    it 'require a unique title' do
      # GIVEN: a campaign in the base with a title and a new Campaign object
      #        instantiated with the same title
      Campaign.create({ title: 'abc', body: 'hello', goal: 100 })
      c = Campaign.new({ title: 'abc' })

      # WHEN: we invoke validations
      c.valid?

      # THEN: There is an error on the title field
      expect(c.errors).to have_key(:title)
    end

    it 'requires the goal to be $10 or more' do
      c = Campaign.new title: 'abc', body: 'xyz', goal: 9
      c.valid?
      expect(c.errors).to have_key(:goal)
    end

  end

end
