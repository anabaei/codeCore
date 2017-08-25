class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :answer

  validates :answer_id, uniqueness: {
    scope: :user_id,
    message: "has already been voted"
  }

  # when validating for the presence of a boolean,
  # `validates :is_up, presence: true` will fail validation for any non-truthy
  # value which includes `false`. This poses problem, because we want to
  # accept false values. To solve this issue, we'll use the inclusion validation
  # which allows you to specify the values that are allowed.
  validates :is_up, inclusion: { in: [true, false] }

  def self.up
    where(is_up: true)
  end

  def self.down
    where(is_up: false)
  end
end
