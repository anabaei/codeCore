class Tip < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :answer, optional: true

  validates :amount, presence: { message: 'must be provided' }, 
                     numericality: { greater_than: 0 }
end
