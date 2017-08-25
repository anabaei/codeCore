class Admin::SurveyQuestionsController < Admin::BaseController

  def index
  end

  def new
    @survey_question = SurveyQuestion.new
    # this creates three associated options for the SurveyQuestion all in memory
    # this will help us bested the dynamic form that will eventually create
    # both the survey question and the options in one submission
    3.times { @survey_question.options.build }
  end

  def create
    survey_question_params = params
                             .require(:survey_question)
                             .permit(:title, { options_attributes: [:body,
                                                                    :id,
                                                                    :_destroy]
                                              }
                                    )
    @survey_question = SurveyQuestion.new survey_question_params
    @survey_question.user = current_user
    if @survey_question.save
      redirect_to admin_survey_questions_path, notice: 'question created'
    else
      render :new
    end
  end
end
