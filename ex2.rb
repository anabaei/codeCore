
arr = ["hello", "greetings", "hola", "hi"]
myhash =  {}
arr.each {|word|
 myhash[word.to_sym] = word.size
  }
puts myhash
