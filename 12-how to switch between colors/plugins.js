$(document).ready(function () {
  $("li").click(function () {
    $(".main").css({
      backgroundColor: $(this).css("backgroundColor"),
      color: "bisque",
    });
  });
});
