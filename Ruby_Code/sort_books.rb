
array = []
while(true)
user_input = gets.chomp
  if user_input.eql? "exit"
    break
  else
    array << user_input.capitalize
  end

end
print array.sort
