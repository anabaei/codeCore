class Admin::DashboardController < Admin::BaseController 
  def index
    @stats = {
               question_count: Question.count,
               answer_count:   Answer.count,
               user_count:     User.count
             }
  end
end
