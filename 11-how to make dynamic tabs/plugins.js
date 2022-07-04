$(document).ready(function () {
  $("li").click(function () {
    $(this)
      .removeClass("basic")
      .addClass("active")
      .siblings()
      .removeClass("active")
      .addClass("basic");
    $("#" + $(this).attr("id") + "-content").fadeIn(500).siblings().hide();
  });
});
