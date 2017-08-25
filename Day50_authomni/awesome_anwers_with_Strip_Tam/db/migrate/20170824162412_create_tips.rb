class CreateTips < ActiveRecord::Migration[5.1]
  def change
    create_table :tips do |t|
      t.references :user, foreign_key: true
      t.references :answer, foreign_key: true
      t.money :amount
      t.string :txn_id

      t.timestamps
    end
  end
end
