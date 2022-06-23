/*
    $.fn/prototype.pluginName = function () {
        $(this).anyProperties
        return $(this);
    }
 */
$(document).ready(function () {
  $.fn.colorCrimson = function () {
    $(this).css("color", "rgb(220, 20, 60)");
    return $(this);
  };
  $("h2").colorCrimson(); //$(selector).colorCrimson() wiil alaways change color of element to crimson
});
