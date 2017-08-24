CarrierWave.configure do |config|
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'] || '',
    aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'] || '',
    region: 'us-west-2'
  }

  config.fog_directory = 'aa-june-2017' # AWS S3 Bucket Name
  config.fog_public = false
  config.fog_attributes = {
    'Cache-Control' => "max-age=#{365.day.to_i}"
  }
end
