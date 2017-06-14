


def largest(*a)
temp = 0
a.each do |var|

 if var > temp
# puts var
   temp = var
  end

end
return temp
end

puts largest(1,2,34,5)
