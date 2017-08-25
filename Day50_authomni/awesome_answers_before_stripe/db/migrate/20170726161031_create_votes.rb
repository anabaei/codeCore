class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.references :user, foreign_key: true, index: true
      t.references :answer, foreign_key: true, index: true
      t.boolean :is_up

      t.timestamps
    end
  end
end
