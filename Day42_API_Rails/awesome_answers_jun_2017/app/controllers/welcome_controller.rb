class WelcomeController < ApplicationController
  # this is the `index` action in our Welcome controller
  def index
    # this will send an HTTP response that has simple text: Hello World!
    # render plain: 'Hello World!'

    # render 'welcome/index'
    # the line above 👆 is implied becuase by convention Rails will
    # automatically render a template with `.html.erb` extension that is in a
    # folder named after the controller within the `views` folder. The file
    # name will match this action's name which is `index` in this case so the
    # file to be rendered will be: /app/views/welcome/index.html.erb

    # by default the view file will use the default layout which is located in:
    # /app/views/layouts/application.html.erb
    # the layout will contain the HTML `<head>` and usually contains the page's
    # header and footer. The content of you view file will go in the place of
    # `<%= yield %>` inside the layout file.
  end
end
