/// Create a bew directory and new file 

require "minitest/autorun"

/// all classes must inherite form minitest 
/// then save it as a ruby file and run it .


class AwesomeTest < Minitest::Test

   def test_adding_numbers
   assert_equal(2,1+1)
   end
 
 end


/// ruby demo.rb -v -p/. it tells you what version of ruby is running 
// assertion tells you what is testing 

// assert only tells you what to compare, 
// assert includes uses for array or hashes


//first arg is what we expect, 
// second is actual value  or current state of program


def test_2
   assert_in_delta expected, actual, 
end

// it is use to test model that has correct 
// refute it fails if it succeess... it is on the other side of assert

/// create a cookie.rb file 

// 

// second require is for loading the cookie.rb inside here 

require "minitttest/autorun"
requre "./cookie.rb"

/// if I dont give it sugar and flavour it ahs to render errors so we write 
   // alll error checkers should put block we want to test inside it 
    assert_raises()

require "minitest/autorun"
require "./cookie.rb"


in test_cookie.rb 
class CookieTest < Minitest::Test
  def test_requires_sugar_and_flour

  // checks if any code in that blcok raises error and if that error is from argument
    assert_raises(ArgumentError)
    { 
    /// it means we have a cookie class and we create an instnce of it 
    Cookie.new 
    }
  end

  def test_requires_flour
    assert_raises(ArgumentError) { Cookie.new(1)}
  end


  def test_calorie_count_calculation
    # Given (a new cookie)
    sugar = rand(1..3)
    flour = rand(4..10)
    c = Cookie.new(sugar, flour)
    # When (calorie_count is called)
    count = c.calorie_count
    # Then (count should be equal to 70)
    assert_equal sugar * 5 + flour * 4, count
  end

end


in cookie.rb
class Cookie
  // we define a contructure 
  def initialize(sugar, flour)
      @sugar = sugar
      @flour = flour
  end

  def calorie_count
     @sugar * 5 + @flour * 4
  end

end

/// here it says succeed
// assert_raises checks the error as first argument is thrown
// if the block runs without error it fails,

// we can do a bunch of asserts  
// the problem is when assert fails then description is not accurate 
    assert_equal 20, Rectangle.new(4,5).area
    assert_equal 9, Rectangle.new(3,3).area
    assert_equal 16, Rectangle.new(2,8).area
    assert_equal 500, Rectangle.new(10,50).area

// new command for git!
// gc commit "add "
/// RSpec with Rails 
