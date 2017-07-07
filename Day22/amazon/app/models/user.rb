class User < ApplicationRecord

    validates(:username, {presence: true, uniqueness: true, exclusion: { in: %w( Microsoft Apple Sony),
    message: "%{value} is reserved." }})


    After_initialize :setprice


    def self.search(users)
         User.where(["username ILIKE ? OR lastname ILIKE ? OR email ILIKE ?", "%#{users}%", "%#{users}%", "%#{users}%"])
    end


    private

    def setprice
      self.sell_price ||= self.price
    end
    

end
