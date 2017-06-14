#student = %w(amir alain colin devansh jacki roy ozge samual shaggy sid )

array = [[2,3,4], [5,6,7], [6,7,8]]
res= []

res = array.map { |s|
 s.map { |v| v*v }
#print s
}
 print res
