
require 'faraday'
require 'json'

response = Faraday.get 'http://localhost:3000/api/v1/questions'

res_json = JSON.parse(response.body)
puts res_json.body

