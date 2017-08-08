class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  # Because the name of our `has_many` association correspond to our source
  # model (:questions), we do not need to provide a `source`. Rails will be able
  # to infer automatically.
  has_many :questions, through: :taggings
  # has_many :tagged_questions, through: :taggings, source: :question

  validates :name, presence: true, uniqueness: { case_sensitive: false }

  before_validation :downcase_name

  private
  def downcase_name
    self.name.downcase!
  end
end
