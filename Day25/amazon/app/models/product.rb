class Product < ApplicationRecord
  belongs_to :category
  belongs_to :user
  has_many :reviews, dependent: :destroy

  # validates :title, {presence: true, uniqueness: {case_sensitive: false},
  #   exclusion: {in: %w(Apple Microsoft Sony), message: "%{value} is reserved."}}

  # validates :description, {presence: true, length: {minimum: 10}}

  # validates :price, {presence: true, numericality: {greater_than: 0}}

  # validate :price_is_valid_decimal_precision

  # validates :sale_price, numericality: {less_than_or_equal_to: :price,
  #   message: 'Sale price must be less than the price'}

  after_initialize :set_defaults
  after_initialize :set_sale_price

  before_save :capitalize_title
  before_destroy :destroy_notification

  def self.search(query)
    where("title ILIKE ? OR description ILIKE ?", "%#{query}%", "%#{query}%").order(:title, :description)
  end

  private

  def price_is_valid_decimal_precision
    if price.to_f != price.to_f.round(2)
      errors.add(:price, "The price of the product is invalid. There should only be two digits at most after the decimal point.")
    end
  end

  def set_defaults
    self.price ||= 1
  end

  def set_sale_price
    self.sale_price  ||= self.price
  end

  def capitalize_title
    self.title = title.titleize if title.present?
  end

  def destroy_notification
    Rails.logger.warn("The Product #{self.title} is about to be deleted")
  end
end