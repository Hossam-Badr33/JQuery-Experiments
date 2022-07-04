$(document).ready(function () {
  var item = $("section .item");
  var options = $("section .options");
  $(item).click(function () {
    $(this)
      .next()
      .show()
      .animate({ width: "20%" }, 1000)
      .siblings(".options")
      .animate({ width: "0" }, function () {
        $(this).hide();
      });
  });
});
