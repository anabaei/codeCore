class Post < ApplicationRecord
  belongs_to :category, optional: true
  belongs_to :user, optional: true

  has_many :comments


  # include Gravtastic
  # gravtastic
end
