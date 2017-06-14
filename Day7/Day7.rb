
# newone = gets
#
# puts newone.chomp
# p newone
# print newone

jacob = {
  age:38,
  hob: ["running","cycling"]
}


jacob.each do |k , v|

  if v.is_a?(Array)
    v.each do |n|
#      puts n
      end
    puts k
  else
#    puts "#{k}, #{v}"
  end
end

charactor = []
# Make charactor array  of a sentech
sentence = "this is test"
#charactor = sentence.split(\/s\)  # remove white space into a new array
sentence.squeeze
charactor = sentence.gsub(" ", "")  # replace space with nothing
charactor = charactor.split # convert into an array
#puts charactor

# hash = Hash.new
# charactor.each_with_index {|x, i|
# hash[i] = x
# }

#puts hash
#the key here for the first time it creates the hash and sexond time it goes
# into the whole funciton and only if reapeated it prints
freq = Hash.new(0)
%w(this is a an arary).each do |char|
#  freq[char] +=1
puts char
end

puts freq

#

def hello
  puts "dd"
end

hello


def lar(*n)
  puts "hello"
  # n is looks like array here
  yield(n) if block_given?
  puts "bye"
end

lar(1,2,3) do |args|
  puts "you"
end


# a proc
# allows us to create a piece of code like block and assign it to a variable

my_proc = proc do
  puts "this"
end

my_aa = proc {puts "thihs is" }
mylambda = lambda {puts "thihs is" }
# diferences
# 1. procs dont allow to use return
# 2. lambda's are strict about the numbers of parameters

my_proc.call
# returns the first match
numbers.detect { |value| numbers.count(value) > 1 }

# returns all matches
numbers.select { |value| numbers.count(value) > 1 }.uniq


def find_repeated_number(numbers)
  result_hash = Hash.new(0)

  numbers.each do |value|
    result_hash[value] += 1
  end

  result_hash.max_by { |k, v| v }.first
end
