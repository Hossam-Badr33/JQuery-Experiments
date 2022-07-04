/*
    1-myInterval = setInterval(function, milliseconds);
    2-clearInterval(myInterval);
 */
$(document).ready(function () {
  $(".count").css({
    // textAlign: "center",
    fontSize: "20px",
    color: "#99c",
    marginTop: "100px",
    textAlign: "center",
  });
  let number = 100;
  let div = document.querySelector(".count");
  $(".count").text(number);
  let myInterval = setInterval(function () {
    if (number > 95) {
      number--;
      div.innerHTML = number;
    } else {
      clearInterval(myInterval);
      div.style.color = "red";
    }
  }, 1000);
});
