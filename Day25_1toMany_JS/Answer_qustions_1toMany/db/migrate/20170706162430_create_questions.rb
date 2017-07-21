# Migrations are used to change the structure of the database. We mean by
# structure things like: adding tables, removing tables, adding indexes,
# removing indexes, adding contraints, removing contraints..etc

# Note that at the beginning of every migration file there is a number that is
# generated from a timestamp. This is important to keep migrations at the same
# order so they are run correctly.
class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    # The code you define within `change` method will be the code that gets
    # executed when you run `rails db:migrate` and it will run the opposite of
    # it when you run `rails db:rollback`

    # the code below is called a DSL (Domain Specific Language), it's all Ruby
    # code that is written in a certain way to ease writing migrations.

    # `create_table` method will generate a table with the name you give it
    # each table will have an `autoincrement` field `id` of type `integer`
    create_table :questions do |t|
      t.string :title
      t.text :body

      # this will generate two fields `created_at` and `updated_at` that are
      # automatically set by Rails and they come in handy when dealing with
      # records
      t.timestamps
    end
  end
end
