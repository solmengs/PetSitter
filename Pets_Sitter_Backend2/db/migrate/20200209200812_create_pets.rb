class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :image
      t.string :anmial_type
      t.integer :age
      t.references :owner, null: false, foreign_key: true

      t.timestamps
    end
  end
end
