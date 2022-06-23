/*
 - to center element in middle of html width & height 50% by css look in style.css
 but to do with function plugins with jQuery:
 */
$(document).ready(function () {
  $.fn.centerElement = function () {
    $(this).css({
      position: "absolute",
      left: $(window).width() / 2 - $(this).width() / 2,
      top: $(window).height() / 2 - $(this).height() / 2,
    });
    return $(this);
  };
  $(".myDiv").centerElement();
});
