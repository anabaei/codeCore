class User < ApplicationRecord
  # has_secure_password is a built-in rails method that provides
  # use authentication features for the model its called in
  # 1. It will automatically add a presence validator for the password field
  # 2. It will create two virtual fields: password & password_confirmation
  # 3. When given a pasword, it will generate a salt. Then, it will hash the hash
  #    salt and password combo, store the result in the password_digest column
  #    (using `bcrypt`.)
  # 4. If you skip the `password_confirmation` field, then it won't give you
  #    a validation error for that, but if you provide it, it will validate that
  #    the `password` & `password_confirmation` are the same.
  # 5. The user instance gets the `authenticate` method which will allow
  #    us to verify if a user entered the correct password. It returns `false` if
  #    the password in incorrect and the user if correct.
  has_secure_password

  has_many :questions, dependent: :nullify
  has_many :answers, dependent: :nullify

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX

  validates :first_name, :last_name, presence: true

  def full_name
    "#{first_name} #{last_name}"
  end
end
