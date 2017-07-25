class Answer < ApplicationRecord
  # When the Answer was generated, it was given the `question:references` column.
  # This automatically added the following line `belongs_to :question` which tells
  # Rails that in the association between Answer-Question, Answer holds the foreign_key,
  # question_id.

  # `belongs_to` adds a validation that the association must exist by default. To
  # disable the validation, give `belongs_to` the argument `optional: true`.
  belongs_to :question #, optional: true

  # `belongs_to` also adds several instance methods for our convenience:
  # question
  # question=(associate)
  # build_question(attributes = {})
  # create_question(attributes = {})
  # create_question!(attributes = {})
  belongs_to :user

  validates :body, presence: true
end
