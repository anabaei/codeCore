class Question < ApplicationRecord
  # Like `belongs_to`, `has_many` tells Rails that Question is associated to
  # the Answer model.
  has_many :answers, dependent: :destroy
  # `dependent: :destroy` will delete all associated answers to the question
  # before the question is deleted.

  # `dependent: :nullify` will update the `quesiton_id` in all associated answers
  # to `NULL` before the is deleted.

  # `has_many` adds many convenience instance methods to the model:
  #  answers
  #  answers<<(object, ...)
  #  answers.delete(object, ...)
  #  answers.destroy(object, ...)
  #  answers=(objects)
  #  answers_ids
  #  answers_ids=(ids)
  #  answers.clear
  #  answers.empty?
  #  answers.size
  #  answers.find(...)
  #  answers.where(...)
  #  answers.exists?(...)
  #  answers.build(attributes = {}, ...)
  #  answers.create(attributes = {})
  #  answers.create!(attributes = {})
  belongs_to :user

  # we can define validations here, validations will be called before saving
  # or before creating a record and will prevent the saving or creation from
  # happening if the validation rules are not met.
  # we can call `.save` we will get back `true` if it completes successfully and
  # will get back `false` if validations fail
  validates(:title, { presence: { message: 'must be provided' },
                      uniqueness: true
                    })
  validates(:body, { presence: true, length: { minimum: 5, maximum: 2000 }})
  validates(:view_count, numericality: { greater_than_or_equal_to: 0 })

  validate :no_monkey

  after_initialize :set_defaults
  before_validation :titleize_title

  # scope :recent, lambda {|count| order({ created_at: :desc }).limit(count) }
  def self.recent(count)
    order({ created_at: :desc }).limit(count)
  end

  private

  def no_monkey
    if title.present? && title.downcase.include?('monkey')
      errors.add(:title, 'No monkey please! 🙈')
    end
  end

  def set_defaults
    self.view_count ||= 0
  end

  def titleize_title
    self.title = title.titleize if title.present?
  end

end
