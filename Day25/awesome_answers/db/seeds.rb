# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
100.times do
  Question.create title: Faker::ChuckNorris.fact,
                  body: Faker::Hacker.say_something_smart
              #    view_count: rand(1000)

end

questions = Question.all
questions.each do |q|
  rand(1..5).times do
    Answer.create(body: Faker::Hacker.say_something_smart, question: q)
  end
end

