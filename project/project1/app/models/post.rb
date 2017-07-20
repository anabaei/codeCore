class Post < ApplicationRecord
	has_many :comments, dependent: :nullify
end
