class AddCategoryToPost < ActiveRecord::Migration[5.1]
  def change
    add_reference :posts, :category, foreign_key: true
  end
end
