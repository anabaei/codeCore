class Post < ApplicationRecord
	has_many :comments, dependent: :nullify
	belongs_to :category, optional: true 
end
