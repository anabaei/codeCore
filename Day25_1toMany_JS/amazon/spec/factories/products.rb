FactoryGirl.define do
  factory :product do
    association :user, factory: :user
    association :category, factory: :category

    sequence(:title) { |n| Faker::Commerce.product_name + "#{n}"}
    description Faker::Hacker.say_something_smart
    price 100
    sale_price 80
  end
end
