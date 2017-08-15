class Post < ApplicationRecord
  belongs_to :category, optional: true
  has_many :comments
end
