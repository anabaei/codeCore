require "minitest/autorun"
require "./rectangle.rb"

class Test_rectangle < Minitest::Test
  
  def test_area
    c = Rectangle.new
    result = c.area 4,3 
    assert_equal 12, result 
  end


  def is_square?
    d = Rectangle.new
    result = d.is_square?(4,3)
    assert_equal true, result 
  end


  # def test_requires_flour
  #   assert_raises(ArgumentError) { Cookie.new(1)}
  # end


  # def test_calorie_count_calculation
  #   # Given (a new cookie)
  #   sugar = rand(1..3)
  #   flour = rand(4..10)
  #   c = Cookie.new(sugar, flour)
  #   # When (calorie_count is called)
  #   count = c.calorie_count
  #   # Then (count should be equal to 70)
  #   assert_equal sugar * 5 + flour * 4, count
  # end
end