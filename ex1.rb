# input = '  '

# input << gets.chomp.to_s;

a = []
# input.map {|v| v.split}

myhash = {'bmw' => '330', 'jeep' => 'sahara', 'Dodge' => 'Charger'}
# a = myhash.keys
# puts a.class
# puts myhash.values

# myhash.map { |key, val|
# puts key
#  }
#  myhash.each_key { |key|
#  puts key
#   }
#
# myhash.each do |key, value|
# puts "#{key} is  #{value}"
# end

my_hash = { 'BC' => ['Vancouver', 'Richmond'],  'AB' => ['Edmonton', 'Calgary']}

my_hash.map {|key, value|
  print key
  for i in 0...1
  value.each {|i| puts i}
  end
}
