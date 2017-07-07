class Product < ApplicationRecord
 
    validates(:title, :price, {presence: true, uniqueness: true})
	


	def self.search(string)
	   Product.where(["title ILIKE ?", "%#{string}%"])
	   Product.where(["description ILIKE ?", "%#{string}%"])
	end


	before_validation :price_check
	before_save :capitalize

	private
    
    def price_check
      self.price = 1 
    end

    def capitalize
      self.title = title.titleize
    end


end
