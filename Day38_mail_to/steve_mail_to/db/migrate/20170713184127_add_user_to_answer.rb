class AddUserToAnswer < ActiveRecord::Migration[5.1]
  def change
    add_reference :answers, :user, foreign_key: true, index: true
  end
end
