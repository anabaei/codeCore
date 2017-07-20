FactoryGirl.define do
  factory :user do
    first_name Faker::Name.first_name
    last_name Faker::Name.last_name
    password "1234567890"
    sequence(:email) { |n| "amazon_user_#{n}@example.com" }
  end


end

