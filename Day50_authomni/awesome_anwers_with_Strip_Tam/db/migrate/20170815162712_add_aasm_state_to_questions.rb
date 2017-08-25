class AddAasmStateToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :aasm_state, :string
  end
end
