$(document).ready(function () {
  var number = 1;
  for (let i = 1960; i <= 2000; i++) {
    /*var option = $(`<option 'value=${number}'>${i}</option>`);*/
    var option = $(`<option>`, { value: i, text: i });
    number++;
    $("select").append(option);
  }
});
