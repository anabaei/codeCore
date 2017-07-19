##factory girl should always generate valid information 
## if we want to test faild validation we have to create first 
## then fialed to validate 

## to generate unique values it take s a column 


FactoryGirl.define do 
  factory :campaign do
    sequence(:title) { |n| "#{Faker::Coffee.blend_name} #{n}"}
    body {Faker::Coffee.notes}
    goal { rand(1000..500_000)}
    end_date {Faker::Date.between(a.month.from_now, 1.day.from_now)}
  end 

end 