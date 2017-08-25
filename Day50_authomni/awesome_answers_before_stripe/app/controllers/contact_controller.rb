class ContactController < ApplicationController
  def new
  end

  # when receiving: POST /contact_submit
  def create
    # we get all the parameters in Rails controllers to the `params` hash which can be accessed by Strings or Symbols as their keys
    # When you define an instance variable, you can access that variable in the view file being rendered which is `create.html.erb` in this case
    @name = params[:name]
    # by default this will render: app/views/contact/create.html.erb
  end
end
