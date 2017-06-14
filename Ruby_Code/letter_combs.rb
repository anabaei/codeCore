string = "abcd"
count = 0
arr = string.split('')
# string.each_char { |pos|
#
# for pos in 0..string.length - 1
#     print string[pos].chr
# end
# puts ' '
result = arr.each_with_index.map { |x,i|
  "#{x}#{arr[i+1]}  "
}
print result

# second solution
res = string.scan(/../)
print res.inspect
