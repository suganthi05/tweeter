$(document).ready(function() {
  var currCharvalue = 0;
  const allowedChar = 140;
  var remainChar = 0;
  $('.new-tweet textarea').on('input', function() {
    $(".error-msg").slideUp(400);
    currCharvalue = this.value.length;
    remainChar = allowedChar - currCharvalue;
    $(".counter").text(remainChar);
    if (currCharvalue > 140) {
      $('.counter').addClass("invalidCount");
    } else {
      $('.counter').removeClass("invalidCount");
    }
  });
});