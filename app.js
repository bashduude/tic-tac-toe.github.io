$(document).ready(function() {

// объявляю переменную xoro(икс или о), со значением по умолчанию = "O".
var xoro = "O";

// устанавливаю эвент на детей "игровой площадки", мол "при отпускании щелчка мышки"
// выполняй функцию.
$('.gamefield').children().each(function() {
  $(this).on('mouseup', function() {

    // определяю пустая ли ячейка, если пустая, выполнение выше описанной функции
    // продолжается.
    if ($(this).html() == "") {

      // switch statement опредяет текущее значение переменной xoro(икс или о).
      switch (xoro) {
        case "O":
          xoro = "X";
        break;
        case "X":
          xoro = "O";
        break;
      }

      // определяю наличие "икс" и "о" в клетке, если их нет, функция продолжается.
      if($(this).html() != "X" && $(this).html() != "O") {
        $(this).html(xoro);
      }
    }

// Логика победы одного из игроков
console.log("Верхний ряд 1-2-3: " + $(".field-1").html() + $(".field-2").html() + $(".field-3").html());
console.log("Нижний ряд 7-8-9: " + $(".field-7").html() + $(".field-8").html() + $(".field-9").html());
console.log("Левый ряд 1-4-7: " + $(".field-1").html() + $(".field-4").html() + $(".field-7").html());
console.log("Правый ряд 3-6-9: " + $(".field-3").html() + $(".field-6").html() + $(".field-9").html());
console.log("Диагональ 1-5-9: " + $(".field-1").html() + $(".field-5").html() + $(".field-9").html());
console.log("Диагональ 7-5-3: " + $(".field-7").html() + $(".field-5").html() + $(".field-3").html());



  });
});

$(".field-1").on('click', function() {


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
