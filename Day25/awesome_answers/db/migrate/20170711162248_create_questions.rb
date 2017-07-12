class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.text :title
      t.text :body

      t.timestamps
    end
  end
end
