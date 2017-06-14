#presidents = ["Ford", "Carter", "Reagan", "Bush1", "Clinton", "Bush2"]

print "Type your FizzBuzz "
user_input = gets.chomp;

out = []
for i in 1...100
  out << ''
 if (i%3 == 0 && i%5== 0)
  out << user_input;
elsif (i%3 == 0)
  #  print "Fizz", "\n";
    out << "Fizz";
elsif (i%5 == 0)
      # print "Buzz" , "\n";
    out << "Buzz";
else
    out << i.to_s;
  #  print i , "\n";
end
end
print out
