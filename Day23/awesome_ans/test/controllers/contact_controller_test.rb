require 'test_helper'

class ContactControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get contact_new_url
    assert_response :success
  end

  test "should get create" do
    get contact_create_url
    assert_response :success
  end

end
