class SurveyQuestion < ApplicationRecord
  belongs_to :user

  has_many :options, dependent: :destroy
  accepts_nested_attributes_for :options, reject_if: :all_blank,
                                          allow_destroy: true

  validates :title, presence: true
end
