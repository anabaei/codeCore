class User < ApplicationRecord
  has_many :votes, dependent: :destroy
  has_many :voted_answers, through: :votes, source: :answer

  has_many :likes, dependent: :destroy
  # has_many's first argument does not have to be another table name. It
  # can be a name of your choosing, but when doing so you must specify details
  # of the association. In this many to many association, we specify the
  # table in between with the `through:` argument and we specify
  # the associated model with `source:`.

  # The value given to `through:` must refer to the name of another association.
  # This association must be defined in the model before the `has_many ... :through`
  # many to many association. In this case, `has_many :liked_questions` must be defined
  # after `has_many :likes`.
  has_many :liked_questions, through: :likes, source: :question

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

  before_create :generate_api_key

  def full_name
    "#{first_name} #{last_name}"
  end

  private
  # We can use the `.send` method to dynamically call a method. We can also
  # use this to get around the fact that a method is `private`.
  # Use `u.send(:generate_api_key)` to call it even though its private.
  def generate_api_key
    # SecureRandom.hex(32) will generate a string of length 32 containing
    # random hex characters.
    loop do
      self.api_key = SecureRandom.hex(32)
      # In the eventuality that we accidently create an API key
      # that already exists in our db, we're going to loop and regenerate it
      # until that is no longer the case.
      break unless User.exists?(api_key: api_key)
    end
  end
end










#
