class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title 
  has_many :answers
  belongs_to :user
end
