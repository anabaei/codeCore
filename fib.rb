

user_input = gets.chomp.to_i;

result1 = 1
fibnum = 0
cnt = 0

for cnt in 1..user_input
  if (user_input == 1 )
     result = 1
  elsif (cnt == 1)
     fibnum = 1;
  elsif (cnt == 2)
    fibnum = 1;
  else
   temp = fibnum
   fibnum   =  fibnum + result1
   result1 = temp
  end
end

puts fibnum
