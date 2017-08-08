class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name 
  has_many :questions
   class QuestionSrialize < ActiveModel::Serializer
   attributes :id, :body
   belongs_to :user, key: :author
 end
end
