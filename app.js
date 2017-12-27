$(document).ready(function() {

var value;
var xoro = "O";

value = "";
//value += "<p class='xando'>" + xoro + "</p>";

/*

$('.gamefield').children().each(function() {
  $(this).on('mouseup', function() {
    if ($(this).val() != "X" || $(this).val() != "O" || $(this).val() != "") {
    switch (xoro) {
      case "O":
        xoro = "X";
      break;
      case "X":
        xoro = "O";
      break;
      default:
    }

    value += "<p class='xando'>" + xoro + "</p>";
    $(this).html(xoro);
  }
  });
});

*/

$('.box').mouseup(function() {
  var oloa;

  /*
  $(this).on('mouseup', function() {
    if ($(this).val() != "X" || $(this).val() != "O" || $(this).val() != "") {
    switch (xoro) {
      case "O":
        xoro = "X";
      break;
      case "X":
        xoro = "O";
      break;
      default:
    }

    value += "<p class='xando'>" + xoro + "</p>";
    $(this).html(xoro);
  }
  });

  */

  switch ($(".box").index(this)) {
    case 0:
      oloa = "";
      alert("Ячейка номер: 1");
      break;
    case 1:
      alert("Ячейка номер: 2");
      break;
    case 2:
      alert("Ячейка номер: 3");
      break;
    case 3:
      alert("Ячейка номер: 4");
      break;
    case 4:
      alert("Ячейка номер: 5");
      break;
    case 5:
      alert("Ячейка номер: 6");
      break;
    case 6:
      alert("Ячейка номер: 7");
      break;
    case 7:
      alert("Ячейка номер: 8");
      break;
    case 8:
      alert("Ячейка номер: 9");
      break;
  }





});




/*

  if ((".field-1").val() + (".field-2").val() + (".field-1").val()) {

  }
*/


});
