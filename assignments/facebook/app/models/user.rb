class User < ApplicationRecord

	def facebook
     @facebook ||= Koala::Facebook::API.new()
	end 
end
