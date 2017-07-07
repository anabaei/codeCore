class AddSalepriceToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :sale_price, :integer
    add_column :users, :price, :integer
    add_column :users, :name, :string
  end
end
