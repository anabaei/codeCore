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

## Avator 
```ruby
gem 'carrierwave', '~> 1.0'
```
`spring stop` to clear cash
```ruby
rails generate uploader Avatar
```
Then inside it has configurations. like the storage fog the place you save ec2, and the address you save in public all images 
and also the type of accepting files in line 39 of this file `app/uploaders/avatar_uploader.rb`
```ruby
rails g migration add_image_to_questions image
```
We need to specify the carriedowver with image no w inside quesiton model 
* uploader mount is the file we generated, and this uploader tells the carriedover what should do with this
```ruby
mount_uploader :image, ImageUploader 
```
now inside the console 
`Question.last.image` we see the image is wrpaed with moundet
this command dowload the image for that address 
q.image.download!(url)

gives the path that the image is save 
q.image.path  
* Inside view we have 
<%= image_tag @question.image.path if  @question.image.present? %> 

now inside the controller add :image in params in controler after adding input firell d  :imag ein view .

### mini_magick
Image we need to resize the image 

gem `mini_magick`
```ruby
brew install imagemagick
```
Inisde image_uploader.rb 
now inside carrierwave  then uncomment minimagick support to access thum function 
so add something like this the eample code is in carreirwave 

```ruby
version :thumb do
    process resize_to_fit: [64,64]
  end
  
  version :small do
    process resize_to_fit: [200,200]
  end
```
 Then after you upload different sizes of images would be uploaded. 
 
 in styling we can have 
 img is child of stylename 
 ```ruby 
 .stylename > img 
 ```
it gives  Question.last(2).first 

it recreate a new version of the images, you can override each other
```ruby
q.image.create_versions!(:medium)
```
## Amazon

```ruby
gem fog 
```
then inside the config/initilizer create setup_fog.rb

```ruby
CarrierWave.configure do |config|
  config.fog_credentials = {
    provide: 'AWS',
    aws_access_key: ENV['AWS_ACCESS_KEY_ID'] || '',
    aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'] || '',
    region: 'us-west-2'
  }

  config.fog_directory = 'aa-june-2017' # AWS S3 Bucket Name
  config.fog_public = false
  config.fog_attributes = {
    'Cache-Control' => "max-age=#{{365.day.to_i}}"
  }
end
```
then we specify what bucket we are usung, check your amazon. 
 config.fog_directory = 'aa-june-2017' # AWS S3 Bucket Name
 
 * Now we have to open up config.app_keys.rb 
 and copye paste the 
 ```ruby
ENV['AWS_ACCESS_KEY_ID'] = 'PUT YOUR ACCESS KEY'
ENV['AWS_SECRET_ACCESS_KEY'] = 'PUT YOUR SECRET ACCESS KEY'
```
