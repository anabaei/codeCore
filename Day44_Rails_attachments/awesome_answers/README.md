## Simple form 
https://github.com/plataformatec/simple_form

```ruby
gem 'simple_form'
```
```ruby
rails g simple_fomr:install --bootstrap
```
* In simple_form we dont need to have labels for each input, also in `config/initializers/simple_form.rb` is default configuration. Then the entire code would be as simple as below.
```ruby
<%= f.input :ttile %>
<%= f.button :submit %>
```
#### override simple form 
* In order to override the simple form we have to use `input_field` instead of input but dont forget to add fomr-group class manually
```ruby
<%= f.input_field :tag_list %>
```
* We can create a partial _form and render `form` inside new and edit. Save time

#### Form_tag 
```ruby
simple_form_for :new_session, url: session_path 
```
convert `f.submit_tag` to `f.button :submit`
* Below code changes the name of model from new_session to session[email].  
```ruby
simple_form_for :seesion, as: :new_session, url: session_path 
```
* Beceuase it changes the params and nested it so we should modify the controler. for example it was available session[:emai] and now we have to use nested params. 
