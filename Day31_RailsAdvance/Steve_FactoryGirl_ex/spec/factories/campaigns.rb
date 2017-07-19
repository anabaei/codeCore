# An important rule when creating factories is that they
# should always generate valid records (that can any variation of a valid record)

# If we want an invalid record for testing purpose, we should begin a
# FactoryGirl created record then modify to fail validation as our
# initial state.

FactoryGirl.define do
  factory :campaign do
    # To generate unique values for columns, use the sequence method.
    # It takes a column (as symbol) for its argument and a block as argument
    # as well. The block will be passed and incrementing for its argument.
    sequence(:title) { |n| "#{Faker::Coffee.blend_name} #{n}" }
    body { Faker::Coffee.notes }
    goal { rand(1000..500_000) }
    end_date { Faker::Date.between(1.month.from_now, 1.day.from_now) }
  end
end
