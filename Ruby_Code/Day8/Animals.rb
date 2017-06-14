class Animal
  attr_writer :color , :name

def initialize(color, name)
    @color = color
    @name = name
end

def eat
  puts "Here! I am Animal"
end

def walk
  puts "I am an Animla and can walk"
end

end

class Dog < Animal
def bark
  puts "wooof"
end

def eat
   super
   puts "Bones are yummy!"
end

end
 
class Cat < Animal
  def eat
     puts "Fishes are yummy!"
  end
end



obj = Dog.new("brown","doggy")
obj.eat
