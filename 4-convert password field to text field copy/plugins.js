$(document).ready(function () {
  $("button").click(function () {
    if ($("input").attr("type") === "password") {
      $("input").attr("type", "text");
      $(".open").css("visibility", "visible");
      $(".close").css("visibility", "hidden");
      console.log($("input").attr("type"));
    } else {
      $("input").attr("type", "password");
      $(".open").css("visibility", "hidden");
    }
  });
});
