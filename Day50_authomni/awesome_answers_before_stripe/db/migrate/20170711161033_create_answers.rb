class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      # `index: true` creates data structure that is optimized for searching
      # (binary search tree). In this case, it creates for searching
      # answers by their question association (or, question_id.)
      t.references :question, foreign_key: true, index: true
      t.text :body

      t.timestamps
    end
  end
end
