
# user_input = gets.chomp.to_i;
my_array = [1,4,5,23,14,"Hello there", false, nil]
result = []

my_array.each {|a|
if a.is_a?(Fixnum)
  if a > 10
     result << a
  end
end
}

print result
