$(document).ready(function () {
  $("textarea").on("keyup", function () {
    let count = parseInt($(this).attr("maxlength")) - $(this).val().length;
    if (count > 0) {
      $("span").text("remain letters: " + count + " of 100");
    } else {
      $("span").text("finished");
    }
  });
});
