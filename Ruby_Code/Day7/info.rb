

def info
myhash = Hash.new
print "type your firstname"
fname = gets.chomp
myhash[:firstname] = fname
print "type your lastname"
lname = gets.chomp
myhash[:lastname] = lname
print "type your city of birth"
city = gets.chomp
myhash[:city] = city
print "type your age"
age = gets.chomp.to_i
myhash[:age] = age

 myhash.each {|k,v| puts "your #{k} is #{v}"}
end

info
