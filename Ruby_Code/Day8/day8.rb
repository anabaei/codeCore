

# you can store a junk of code inside a variable and reuse it by plocs & lambda
# Eval take code and convert into to compileable labguage
# # proc - lambda a way to create piece of code that we can assign to a variable
# noname hunctions
# All codes for day 8
# https://github.com/CodeCoreYVR/bootcamp_summary_notes/blob/master/week_02/ruby_classes_and_objects.md
my_lambda = lambda { puts " fsd"}
my_lambda = lambda do
  puts "fdsfdsf"
end

# to call it
mylambda.call

my_proc = proc { puts " fsd"}
my_proc = proc do
  puts "fdsfdsf"
end

# Difference between plocs and lambda
# plocs can not return anything
# plocs can hace more paramas

#TODO helps you come back later when you search it
#Command + Shift + f --> type #TODO and it gives you back all todos
# INHERITANCE
#require './cookie'
#load './orea.rb'

# method - a function inside a class
# @-> instance variable
# $-> class variable

# require leads everytime, more safe
# load will check to if it is loaded, smarter

## Class methods and class variables like @@var1 belongs to  
