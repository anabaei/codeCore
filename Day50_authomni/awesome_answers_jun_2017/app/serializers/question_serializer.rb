class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :body

  belongs_to :user, key: :author
  has_many :answers

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name
  end

  class AnswerSerializer < ActiveModel::Serializer
    attributes :id, :body, :author_full_name, :created_at, :updated_at

    def author_full_name
      object.user&.full_name
    end
  end
end
