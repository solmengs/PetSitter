class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :anmial_type, :age, :notes
  has_one :owner
end
