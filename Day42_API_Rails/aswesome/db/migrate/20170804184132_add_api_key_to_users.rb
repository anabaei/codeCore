class AddApiKeyToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :api_key, :string
    add_index :users, :api_key
    
  end
end
