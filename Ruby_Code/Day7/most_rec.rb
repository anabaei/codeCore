# Find the most recurring letter in a given string from the user.

def most_rec
arr = []
result = 0
temp = 0
input = gets.chomp
hash = Hash.new(0)
arr = input.split("")
arr.each do |x|
  hash[x] +=1
        end
result = hash.values.max


# hash.each do |key, value|
#   if value > temp
# #   puts value
#      temp = key
#      result = value
#   end



puts "#{hash.key(result)} for #{hash.value(result)}"
end

#most_rec

def num_fre
  hash = Hash.new(0)
  array = [1,2,3,4,4,4,2,3,3,3]
  array.each_with_index {|x| hash[x] +=1 }
  # arr.each do |x|
  #   hash[x] +=1
  #         end

puts hash
end

def pluck(x,y)
result = []
  x.each  {|k,v|
#    puts y.to_s.class
      k.each  {|a,b|
        if a == y
         result << b
       else
         result << nil
       end
     }
  }
print result
end

def pluck1(data, name)
  h = {}
  data.map do |h|
    h[name]
  end
  puts h
end


pluck1([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a)
puts
# pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b)
# pluck([{a:1}, {a:2}], :a)
