class CreateOwners < ActiveRecord::Migration[6.0]
  def change
    create_table :owners do |t|
      t.string :name
      t.string :address
      t.string :user_image
      t.string :background_image

      t.timestamps
    end
  end
end
