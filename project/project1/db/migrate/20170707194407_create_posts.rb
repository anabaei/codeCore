class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :location
      t.string :title
      t.string :name
      t.string :body

      t.timestamps
    end
  end
end
