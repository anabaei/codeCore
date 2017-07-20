FactoryGirl.define do
  # factory :campaign do
  #   body "MyString"
  #   title "MyString"
  #   goal 1
  #   endDate "2017-07-19"
  # end
   factory :campaign do
 # since tilte has to be unique then we use sequence 
    sequence(:title) { |n| "#{Faker::Coffee.blend_name} #{n}"}
    # then add the body 
    body {Faker::Coffee.notes}
    # this is a money random 
    goal { rand(1000..500_000)}
    endDate {Faker::Date.between(1.month.from_now, 1.day.from_now)}
  end 
end
