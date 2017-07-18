require './student.rb'

RSpec.describe Student do
  describe 'initialize' do
    it "takes in three arguments" do
      student = Student.new('Billy', 'Bob', 95)
      expect(student.first_name).to eq('Billy')
      expect(student.last_name).to eq('Bob')
      expect(student.score).to eq(95)
    end
  end

  describe 'full_name' do
    it 'returns the first_name and last_name concatenated' do
      student = Student.new('Billy', 'Bob', 95)
      expect(student.full_name).to eq('Billy Bob')
    end
  end

  describe 'grade' do
    it "returns A for a score higher than 90" do
      student = Student.new('Billy', 'Bob', 95)
      expect(student.grade).to eq('C')
    end
   end 
end






