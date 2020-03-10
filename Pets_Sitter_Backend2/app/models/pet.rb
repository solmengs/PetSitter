class Pet < ApplicationRecord
  belongs_to :owner
  has_many :notes
end
