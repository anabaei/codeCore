
def repint(arr)
hash = Hash.new(0)
arr.each  {|x| hash[x] +=1
 if hash[x] > 1
   puts x
 end
 }
end

def repint_wh(arr)
  result = nil
  arr.each_with_index {|x,i| arr.each_with_index {|y,j|
    if (x==y && i!=j)
     result = x
      break
    end
  }

  }
  puts result
end

repint_wh([4,2,4,5,6,7,8,8])


array.select {|value| array.count(value) > 1}.uniq
#array.select {|value| array.count(value) > 1}.uniq
