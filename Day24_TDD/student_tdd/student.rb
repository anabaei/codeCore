class Student 
attr_reader :first_name, :last_name, :score

  def initialize(first_name, last_name, score)
    @first_name = first_name
    @last_name = last_name
    @score = score
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  def grade
    case @score
    when (90..100)
      'A'
    when (75..89)
      'B'
    when (60..74)
      'C'
    when (50..59)
      'D'
    when (0..49)
      'F'
    else
      'Invalid Score'
    end
  end

end 
