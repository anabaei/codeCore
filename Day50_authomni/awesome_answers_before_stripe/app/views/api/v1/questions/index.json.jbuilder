json.array! @questions do |question|
  # Inside of this block, the method used with json will determine
  # the name of the key in the json response.
  json.id question.id
  json.title question.title
  json.author_name question.user.full_name
  json.created_at question.created_at.to_formatted_s(:long)
  json.updated_at question.updated_at.to_formatted_s(:long)
end
