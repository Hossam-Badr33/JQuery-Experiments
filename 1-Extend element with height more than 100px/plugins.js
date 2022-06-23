/*
jQuery.extend( target, object1 [, objectN ] )   Returns: Object.
    $.extend($.expr[":"], {
        selectorName: function (element) {
            return $(element);
        }
    })
 */
$(document).ready(function () {
  $.extend($.expr[":"], {
    widthLT100: function (element) {
      if ($(element).width() < 100) {
        return $(element);
      }
    },
  });
  console.log($("li:widthLT100").width());
  $("li:widthLT100").css("color", "#0b1");
  $.extend($.expr[":"], {
    color0b1: function (element) {
      if ($(element).css("color") === "rgb(0, 187, 17)") {
        return $(element);
      }
    },
  });
  console.log($("li:color0b1").text());
  $.extend($.expr[":"], {
    centerElement: function (element) {
      $(element).css("margin", "auto");
      return $(element);
    },
  });
});
