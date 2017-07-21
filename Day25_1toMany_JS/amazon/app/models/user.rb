class User < ApplicationRecord
 VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  has_secure_password

  has_many :products, dependent: :nullify
  has_many :reviews, dependent: :nullify


  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX

  before_validation :downcase_email

  def full_name
    "#{first_name} #{last_name}".strip
  end

  private

  def downcase_email
    self.email&.downcase!
  end
end
