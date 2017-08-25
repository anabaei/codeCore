class Question < ApplicationRecord
  attr_accessor :tweet_this

  mount_uploader :image, ImageUploader
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user

  # Like `belongs_to`, `has_many` tells Rails that Question is associated to
  # the Answer model.

  # We can pass a lambda as a second argument to an `has_many` method to
  # apply query on every call of the association. Here we use it to always
  # order questions by the time they were created. A lambda is ruby's version
  # of anonymous inline function.
  has_many :answers, -> () { order(created_at: :desc) }, dependent: :destroy
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

  def tag_list
    # tags.map { |tag| tag.name }
    tags.map(&:name).join(", ")
  end

  # We can create methods that are called `setters`. They
  # simulate an instance attribute. When assigning a value to it,
  # it is instead passed as argument to the method.
  def tag_list=(value)
    self.tags = value.split(/\s*,\s*/).map do |name|
      Tag.where(name: name.downcase).first_or_create!
    end
  end
  # usage:
  # question.tag_list = 'some,thing,etc'

  include AASM

  # DSL: Domain Specific Language, it's Ruby code written in a certain way that
  #      seems like it's own language to serve a purpose (in this case defining
  #      the state machine rules)
  aasm whiny_transitions: false do
    state(:draft, { initial: true })
    state :published
    state :canceled
    state :answered
    state :closed

    event :publish do
      transitions from: [:draft, :answered], to: :published
    end

    event :close do
      transitions from: [:published, :answered], to: :closed
    end

    event :cancel do
      transitions from: [:published, :answered], to: :canceled
    end

    event :answer do
      transitions from: [:published, :answered], to: :answered
    end
  end

  def self.viewable
    where(aasm_state: [:published, :closed, :answered]).order(created_at: :desc)
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
