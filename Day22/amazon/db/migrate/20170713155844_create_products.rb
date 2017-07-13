class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :rails
      t.string :s

      t.timestamps
    end
  end
end
