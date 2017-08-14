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

