$(document).ready(function() {

var xoro = "O";


$('.gamefield').children().each(function() {
  $(this).on('mouseup', function() {
    if ($(this).html() == "") {

    switch (xoro) {
      case "O":
        xoro = "X";
      break;
      case "X":
        xoro = "O";
      break;
      default:
    }

    if($(this).html() != "X" && $(this).html() != "O") {
      $(this).html(xoro);
    }
    }
  });
});



/*

$('.box').mouseup(function() {
  var oloa;


  switch ($(".box").index(this)) {
    case 0:
      oloa = "";
      $(".field-1").html(value);

      break;
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

      break;
    case 6:

      break;
    case 7:

      break;
    case 8:

      break;
  }

});

*/



/*

  if ((".field-1").val() + (".field-2").val() + (".field-1").val()) {

  }
*/


});
