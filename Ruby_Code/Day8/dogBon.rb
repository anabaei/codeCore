
class Dogs
  attr_writer :color
  attr_writer :type

def initialize(color, type)
  @color = color
  @type = type
    @allbones = []
end

def give(bone)
  if (@allbones.length < 3)
    @allbones.push(bone)
     puts "I added, now I  have #{@allbones.length} bones! "
  else
 puts "I have too many!"
  end

end

def eat
     @allbones.pop
     puts " I s till have #{@allbones.length} "
end

end


class Bones
  attr_writer :size
def initialize(size)
  @size = size
end
end

obj = Dogs.new("brown","doggy")
obj2 = Bones.new(32)
obj.give(obj2)
obj2 = Bones.new(32)
obj.give(obj2)
obj2 = Bones.new(32)
obj.give(obj2)
obj.eat
obj.eat
obj.eat
obj.eat
obj.give(obj2)
