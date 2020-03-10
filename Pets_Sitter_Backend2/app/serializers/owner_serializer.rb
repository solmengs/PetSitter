class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :user_image, :background_image, :pets
end
