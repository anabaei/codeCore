class Question < ApplicationRecord
 ## tells rails that question is associated to he Answer model 
 has_many :answers

end
