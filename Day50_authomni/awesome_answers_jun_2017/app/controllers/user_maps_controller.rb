class UserMapsController < ApplicationController
  def index
    users = User.where.not(longitude: nil, latitude: nil)
    @hash = Gmaps4rails.build_markers(users) do |user, marker|
      marker.lat user.latitude
      marker.lng user.longitude
      marker.infowindow user.full_name
    end
  end
end
