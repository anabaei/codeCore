
##################################################################################
############################ Qusetion 1 ##########################################
##################################################################################

module HelperMethods
  
  def greeting(name)
  puts  "Hello #{name}"
  end

  def titleize(str)
   arr = []
   result = []
   arr = str.split(" ")
   arr.each {|x| 
   	if ( x == "from" || 
   		 x == "in" ||
   		 x == "or" ||
   		 x == "of" ||
   		 x == "and" ||
   		 x == "the" 
   		 )
    result << x 
    result << ' '
   else
    result << x.capitalize! 
    result << ' '
   end 
   }

 return result.join  
  end

end

class Class1
  include HelperMethods
end


class Class2
 extend HelperMethods
end

#to access method inside class1 which uses include we need to create instance of class first 
c = Class1.new
res = c.titleize("hello from  the word")
puts "#{res}"

# use directly class method without making instance class from class 
puts " #{Class2.titleize("this is the test from class method!")}" 


#########################################################################################
##################################  Qusetion 2  ##########################################
#########################################################################################

class Book

attr_writer :title;
attr_reader :title;
 

     def initialize
      @arr = Array.new
      @books = Hash.new(0)          
     end 

	def add_chapter(chapter)
       # @books = Hash.new
       # @books[@title] = chapter 
	    @arr << chapter 
	    @books[@title] = @arr
	 
	end 
    def chapters
      #{@books.length}"
     
     @books.each { |name, chp|
           puts "your book: #{name} has #{chp.length} chapters"
           chp.each_with_index {|chapname, index| puts "#{index+1}. my #{name} #{chapname}"}
     } 
    end 
end

b = Book.new
b.title = "awesome"
b.add_chapter("chap1")
b.add_chapter("chap2")
b.add_chapter("chap3")
b.add_chapter("chap4")
b.chapters

#########################################################################################
##################################  Qusetion 3  ##########################################
#########################################################################################

class Question3

	  def is_prime?(number)
		   # fname = gets.chomp
		   result = true
		   n = number/2
			  while(n > 1)
				   	if(number%n == 0)
				   	  result= false
				   	end
               n -=1			  
			  end
		return result
	  end 
end




obj = Question3.new
res = obj.is_prime?(23)
puts "#{res}"


#########################################################################################
##################################  Qusetion 4  ##########################################
#########################################################################################
# var major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]}

class Question4
 
 def que4(input)
 	input.each { |province, cities|
 	  #  print province
 	  # print cities
 	  leng = cities.length
 	  print "#{province} has #{cities.length} number of cities"
 	  cities.each_with_index { |n,i|
        if(i == (leng -1))
        print  "and #{n}"
        else 
        print " #{n} "
        end
 	  }
 	  puts " "
 	 }

 	
 end

end

major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]}
obj = Question4.new
obj.que4(major_cities)











