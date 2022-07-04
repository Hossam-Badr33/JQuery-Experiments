$(document).ready(function () {
  let img = document.querySelector("img"),
    div = $(".show");
  img.style.cssText = `
     width: 100px;
     height: 80px;
     border-radius: 5px;
     position: relative;
     `;

  function move2() {
    $("img").animate(
      {
        top: "-53px",
        left: "30px",
      },
      500,
      function () {
        $(this).animate(
          {
            top: "0",
            left: "0",
          },
          500
          /* 1st solution
          function () {
            //repeat same function
            move2();
            //
          }
          */
        );
      }
    );
  }
  //   move2(); // 1st solution u can use fuction name with repeating same function
  /*2nd solution same 1st solution u can just apply in self-invoke function*/
  (function move2() {
    $("img").animate(
      {
        top: "-53px",
        left: "30px",
      },
      500,
      function () {
        $(this).animate(
          {
            top: "0",
            left: "0",
          },
          500,
          function () {
            //repeat same function
            move2();
            //
          }
        );
      }
    );
  })();
  /*3rd solution setInterval() */
  //   setInterval(move1, 1000);
});
