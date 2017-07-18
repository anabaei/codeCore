# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#  categories = ['Books', 'Techology', 'Computers', 'Movies', 'TV', 'Fashion', 'Music']

# categories.each do |category|
#   Category.create(name: category)
# end

# Review.destroy_all
# Product.destroy_all
# Category.destroy_all
# User.destroy_all

categories = ['Books', 'Techology', 'Computers', 'Movies', 'TV', 'Fashion', 'Music']

categories.each do |category|
  #puts "#{category} products created!"
  Category.create(name: category)

end

20.times do
  user = Faker::StarWars.character
  email = user.delete(' ').downcase
  names = user.split(' ')

  User.create(
    email: "#{email}@cohort19.com",
    first_name: names.first,
    last_name: names.last,
   # password: '12345',
    #password_confirmation: '12345'
  )
end

100.times do
  category = Category.all.sample
  user = User.all.sample

  p = Product.create(
    title: Faker::Superhero.name,
    description: Faker::Hipster.sentence,
    price: Faker::Commerce.price,
    category_id: category.id,
    user_id: user.id
  )

  5.times do
    reviewer = User.all.sample
    rating = [1, 2, 3, 4, 5].sample

    # p.reviews.create(
    #   body:       Faker::Hipster.paragraph(5),
    #   rating:     rating,
    #   user_id:    reviewer.id
    # )
  end
end

puts "#{Product.count} products created!"

# 1000.times do
#   category = Category.all.sample

#   p = Product.create(
#     title: Faker::Superhero.name,
#     description: Faker::Hipster.sentence,
#     price: Faker::Commerce.price,
#     category_id: category.id
#   )
# end



# categories = ['books','computer', 'fashion', 'tv', 'movies', 'fun']

# for categories.each |cc| do
# 	{
#     Category.new(name: cc);
# 	}
# end