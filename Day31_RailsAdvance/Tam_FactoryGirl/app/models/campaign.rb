class Campaign < ApplicationRecord
  belongs_to :user, optional: true
  validates :title, presence: true, uniqueness: true
  validates :goal, numericality: { greater_than_or_equal_to: 10 }
end
