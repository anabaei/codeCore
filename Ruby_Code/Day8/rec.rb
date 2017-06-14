# write a program that gets two width and height


class Rectangle

attr_writer :width
attr_writer :height

 def area
  @width * @height
 end
 def is_square?
   @width == @height
 end
end


obj = Rectangle.new
obj.width = 100_000_000
obj.height = 20
puts "#{obj.is_square?}"
puts "#{obj.area }"
