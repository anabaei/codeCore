class Car

def initialize(model, type, capacity)
    @model = model
    @type = type
    @cap = capacity
    @@outside = 66
end

def drive
  puts " I drive #{@model} #{@type} with #{@cap} seats"
end

def park
 puts " I parked bro #{@var}"
 ignite()
end

# defualt value is zero due to lack of params
def max(n=0)
  puts "#{n}"
  @var = n
   # by all objects of Cookie class and subclasses
  @@outside = 89
end

def selfcol
puts  @@outside
  puts "I am from slefcol"
end

#attr_reader :sugar_amount
def sugar_amount
  @sugar_amount
end

#attr_writer :sugar_amount
def sugar_amount=(new_amount)
  @sugar_amount = new_amount
  @@outside = new_amount
  # @@outside = new_amount
end
# private method are not able to call from outside class
private
def ignite
 puts " I am igniting "
end
end


tesla = Car.new("Toyota", "RAV 4", 6)
tesla.drive
ps = tesla.selfcol
puts "#{ps}"
tesla.sugar_amount = 13
puts "#{tesla.selfcol}"
# tesla.max(3)
# tesla.park

#puts @@outside
