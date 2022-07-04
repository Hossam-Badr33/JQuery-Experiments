$(document).ready(function () {
  //dynamic
  $("button").click(function () {
    $("link[class='change']").attr("href", "styles/" + $(this).val() + ".css");
  });
});
