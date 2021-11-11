class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :slug

  has_many :reviews

end
