$(function () {
  $('#question_tag_list').selectize({
    delimeter: ',',
    persist: false,
    create: function (input) {
      return {
        value: input,
        text: input
      }
    }
  });
})
