class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :description
      t.string :catagory
      t.integer :priority
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
