class NoteSerializer < ActiveModel::Serializer
  attributes :id, :description, :catagory, :priority
  has_one :pet
end
