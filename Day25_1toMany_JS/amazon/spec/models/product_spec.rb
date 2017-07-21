require 'rails_helper'

RSpec.describe Product, type: :model do
  def valid_attributes(new_attributes)
    attributes = {
      title: "Powerful Laptop",
      description: "New, shiny and silver",
      price: 1000
    }
    attributes.merge(new_attributes)
  end

  describe "validations" do
    context 'title' do
      it "requires a title" do
        product = Product.new(valid_attributes({ title: nil }))
        expect(product).to be_invalid
      end

      it "requires unique titles" do
        product  = Product.new(valid_attributes({ title: 'Hey Buddy' }))
        product2 = Product.new(valid_attributes({ title: 'Hey Buddy' }))
        product.save
        expect(product2).to be_invalid
      end

      it "capitalizes the title after getting saved" do
        product = Product.new(valid_attributes({ title: 'hello jello' }))
        product.save
        expect(product.title).to eq('Hello Jello')
      end
    end

    context 'description' do
      it "requires a description" do
        product = Product.new(valid_attributes({ description: nil }))
        expect(product).to be_invalid
      end
    end

    context 'price' do
      it "sets the default price to 1 if none is given" do
        product = Product.new(valid_attributes({ price: nil }))
        expect(product.price).to eq(1.0)
      end

      it "requires the price to be greater than 0" do
        product = Product.new(valid_attributes({ price: 0 }))
        product.save
        expect(product.errors.messages).to have_key(:price)
      end
    end
  end
end