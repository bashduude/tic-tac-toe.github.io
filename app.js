$(document).ready(function() {

// объявляю переменную xoro(икс или о), со значением по умолчанию = "O".
var xoro = "O";

// объявляю переменную количества крестов
var xval = 0;

// объявляю переменную количества нолей
var oval = 0;

var nice = "";


var win123;
var win789;
var win147;
var win369;
var win159;
var win753;

// объявляю переменную победителя.
var winner = "<h1>" + "Победил: ";

// устанавливаю эвент на детей "игровой площадки", мол "при отпускании щелчка мышки"
// выполняй функцию.
$('.gamefield').children().each(function() {
  $(this).on('click', function() {

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

        // ставлю крестик или нолик на поле в зависимости от текущего значения переменной
        $(this).html(xoro);


        if(xoro == "X") {
          xval++;
        } else {
          oval++;
        }

      }
    }


    $(".oval").html("<p>" + "Сумма O:  " + oval + "</p>");
    $(".xval").html("<p>" + "Сумма X:  " + xval + "</p>");


// логика победы одного из игроков.
console.log("Верхний ряд 1-2-3: " + $(".field-1").html() + $(".field-2").html() + $(".field-3").html());
console.log("Нижний ряд 7-8-9: " + $(".field-7").html() + $(".field-8").html() + $(".field-9").html());
console.log("Левый ряд 1-4-7: " + $(".field-1").html() + $(".field-4").html() + $(".field-7").html());
console.log("Правый ряд 3-6-9: " + $(".field-3").html() + $(".field-6").html() + $(".field-9").html());
console.log("Диагональ 1-5-9: " + $(".field-1").html() + $(".field-5").html() + $(".field-9").html());
console.log("Диагональ 7-5-3: " + $(".field-7").html() + $(".field-5").html() + $(".field-3").html());
console.log("Диагональ 4-5-6: " + $(".field-4").html() + $(".field-5").html() + $(".field-6").html());
console.log("Диагональ 2-5-8: " + $(".field-2").html() + $(".field-5").html() + $(".field-8").html());


// ниже описана логика победы того или иного игрока.
  if($(".field-1").html() + $(".field-2").html() + $(".field-3").html() == "XXX" ||
   $(".field-1").html() + $(".field-2").html() + $(".field-3").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner);

   } else if ($(".field-7").html() + $(".field-8").html() + $(".field-9").html() == "XXX" ||
    $(".field-7").html() + $(".field-8").html() + $(".field-9").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner);

   } else if ($(".field-1").html() + $(".field-4").html() + $(".field-7").html() == "XXX" ||
    $(".field-1").html() + $(".field-4").html() + $(".field-7").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner);

   } else if ($(".field-3").html() + $(".field-6").html() + $(".field-9").html() == "XXX" ||
    $(".field-3").html() + $(".field-6").html() + $(".field-9").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner);

   } else if ($(".field-1").html() + $(".field-5").html() + $(".field-9").html() == "XXX" ||
    $(".field-1").html() + $(".field-5").html() + $(".field-9").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner);

   } else if ($(".field-7").html() + $(".field-5").html() + $(".field-3").html() == "XXX" ||
    $(".field-7").html() + $(".field-5").html() + $(".field-3").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner);

   } else if ($(".field-4").html() + $(".field-5").html() + $(".field-6").html() == "XXX" ||
    $(".field-4").html() + $(".field-5").html() + $(".field-6").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner);

   } else if ($(".field-2").html() + $(".field-5").html() + $(".field-8").html() == "XXX" ||
    $(".field-2").html() + $(".field-5").html() + $(".field-8").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner);

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



});
