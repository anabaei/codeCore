class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.string :body
      t.string :title
      t.integer :goal
      t.date :endDate

      t.timestamps
    end
  end
end
