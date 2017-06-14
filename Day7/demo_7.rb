 bc_cities_population = {vancouver: 2135201, victoria:  316327, abbotsford: 149855, kelowna: 141767, nanaimo:  88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }
# Write a method that takes the hash and prints if city is large (more than 100,000) or small (otherwise). Printing something like: Vancouver is a large city


bc_cities_population.each do |key,val|
  puts val
end
