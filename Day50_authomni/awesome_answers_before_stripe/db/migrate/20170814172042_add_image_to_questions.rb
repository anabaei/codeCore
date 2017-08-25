class AddImageToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :image, :string
  end
end
