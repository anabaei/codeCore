class FizzBuzz

  attr_writer :first_number
  attr_writer :second_number

def run
   result = []
   cnt = 1
   while (cnt <101)

     if ( (cnt % @first_number.to_i) == 0 && (cnt % @second_number.to_i) == 0)

          result << "FizzBuzz"
    elsif ( (cnt % @first_number.to_i) == 0 )

          result << "Fizz"
    elsif ( (cnt % @second_number.to_i) == 0 )

        result << "Buzz"
    else
        result << cnt
      end
    cnt +=1
   end
print result
end

obj = FizzBuzz.new
obj.first_number = 3
obj.second_number = 5
obj.run

end
