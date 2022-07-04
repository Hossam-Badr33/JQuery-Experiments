$(document).ready(function () {
  $("h3").click(function () {
    $(this).next().slideToggle(500);
    $("p").not($(this).next()).slideUp(500);
  });
});
