class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :title
      t.text :body
      t.integer :goal
      t.datetime :end_date

      t.timestamps
    end
  end
end
