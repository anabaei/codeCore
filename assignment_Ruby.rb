
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
###puts "#{res}"

# use directly class method without making instance class from class 
###puts " #{Class2.titleize("this is the test from class method!")}" 


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
###b.chapters

#########################################################################################
##################################  Qusetion 3  ##########################################
#########################################################################################

class Question3

	  def is_prime?(number)
		   # fname = gets.chomp
		   result = false
		   n = number/2
		   puts n
			    while(n > 1)
			   	if(number%n == 0)
			   	  n -=1
			   	  puts "came here!"
			   	else
			   		result= true
			   		
			   		puts "this is #{result}"
			   	    break
			   	end
			  end
		return result
	  end 
end




obj = Question3.new
res = obj.is_prime?(8)
puts "#{res}"
















