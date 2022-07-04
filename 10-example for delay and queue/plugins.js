$(document).ready(function () {
  function showImage() {
    $("img").fadeIn(500);
  }
  $(".show-image").click(function () {
    $(this)
      .text("loading...")
      .delay(1000)
      .queue(function () {
        $(this).hide();
        showImage();
        //calling showimage() function
        $(this).dequeue();
      });
  });
  $(".btn1").click(function () {
    span.animate({ width: "300px" });
    span.animate({ height: "300px" });
    span.queue(function () {
      $(this).css({
        backgroundColor: "red",
        color: "#fff",
      });
      $(this).dequeue();
    });
    span.animate({ width: "50px" });
    span.animate({ height: "50px" });
    showQueueLength();
  });
  var span = $(".myP span");
  function showQueueLength() {
    $(span).text(span.queue().length);
    setTimeout(showQueueLength);
  }
});
