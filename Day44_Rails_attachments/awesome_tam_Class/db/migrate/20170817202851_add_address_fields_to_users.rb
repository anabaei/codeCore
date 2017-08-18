class AddAddressFieldsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :address, :string
    add_column :users, :longtitude, :float
    add_column :users, :latitude, :float
  end
end
