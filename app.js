$(document).ready(function() {

  // объявляю переменную xoro(икс или о), со значением по умолчанию = "O".
  var xoro = "O";

  // объявляю переменную количества крестов.
  var xval = 0;

  // объявляю переменную количества нолей.
  var oval = 0;

  // объявляю переменную конец игры, по эмолчанию игра не закончена.
  var endofgame = false;

  // объявляю переменную победителя.
  var winner = "<h1>" + "Победил: ";

  // устанавливаю эвент на детей "игровой площадки", при клике
  // выполняй функцию.
  $('.gamefield .box').on('click', function() {

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
    if($(this).html() != "X" && $(this).html() != "O" && endofgame == false) {

    // ставлю крестик или нолик на поле в зависимости от текущего значения переменной.
    $(this).html(xoro);

    // увеличиваю количество ноликов или крестиков в переменной в зависимости
    // от свеже-измененной клетки.
    if(xoro == "X") {
    xval++;
    } else {
    oval++;
    }

    // проверка на ничью.
    if (oval + xval == 9) {
    $(".winner").html("<h1>" + "Ничья!" + "</h1>").addClass("endofgame");
    $(".box").addClass("endofgame");
    }
    }
  }

  // добавляю на экран сумму ноликов в данный момент на поле.
  $(".oval").html("<p>" + "Сумма O:  " + oval + "</p>");

  // добавляю на экран сумму крестиков в данный момент на поле.
  $(".xval").html("<p>" + "Сумма X:  " + xval + "</p>");

  if (endofgame == false) {

    // ниже описана логика победы того или иного игрока.
    if($(".field-1").html() + $(".field-2").html() + $(".field-3").html() == "XXX" ||
    $(".field-1").html() + $(".field-2").html() + $(".field-3").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner).addClass("endofgame");
      $(".box").addClass("endofgame");

    } else if ($(".field-7").html() + $(".field-8").html() + $(".field-9").html() == "XXX" ||
    $(".field-7").html() + $(".field-8").html() + $(".field-9").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner).addClass("endofgame");
      $(".box").addClass("endofgame");

    } else if ($(".field-1").html() + $(".field-4").html() + $(".field-7").html() == "XXX" ||
    $(".field-1").html() + $(".field-4").html() + $(".field-7").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner).addClass("endofgame");
      $(".box").addClass("endofgame");

    } else if ($(".field-3").html() + $(".field-6").html() + $(".field-9").html() == "XXX" ||
    $(".field-3").html() + $(".field-6").html() + $(".field-9").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner).addClass("endofgame");
      $(".box").addClass("endofgame");

    } else if ($(".field-1").html() + $(".field-5").html() + $(".field-9").html() == "XXX" ||
    $(".field-1").html() + $(".field-5").html() + $(".field-9").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner).addClass("endofgame");
      $(".box").addClass("endofgame");

    } else if ($(".field-7").html() + $(".field-5").html() + $(".field-3").html() == "XXX" ||
    $(".field-7").html() + $(".field-5").html() + $(".field-3").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner).addClass("endofgame");
      $(".box").addClass("endofgame");

    } else if ($(".field-4").html() + $(".field-5").html() + $(".field-6").html() == "XXX" ||
    $(".field-4").html() + $(".field-5").html() + $(".field-6").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner).addClass("endofgame");
      $(".box").addClass("endofgame");

    } else if ($(".field-2").html() + $(".field-5").html() + $(".field-8").html() == "XXX" ||
    $(".field-2").html() + $(".field-5").html() + $(".field-8").html() == "OOO") {

      winner += xoro + "</h1>";
      $(".winner").html(winner).addClass("endofgame");
      $(".box").addClass("endofgame");

    }
  }

  // проверка на победу.
  if($(".winner").hasClass("endofgame")) {
    $(".btn-class").html("<button class='clicktorestart'>" + "Заново?" + "</button>");

    // если победил или ничья - игра закончилась.
    endofgame = true;

  }

  // если игра закончилась, -
  if (endofgame == true) {
    $(".clicktorestart").on('click', function() {

      // сбрасываю класс конец игры с элементов.
      $(".winner").removeClass("endofgame");
      $(".box").removeClass("endofgame");

      // "перезапускаю" конец игры, делаю ее снова "незаконченой".
      endofgame = false;

      // очищаю поле от крестиков и ноликов.
      $('.gamefield').children().each(function() {
        $(this).html("");
      });

      // убираю результат о победителе с экрана.
      $(".winner").html("");

      // убираю результат о победителе с переменной.
      winner = "<h1>" + "Победил: ";

      // сбрасываю значение количества Х и О на экране и в счетчике.
      oval = 0;
      xval = 0;
      $(".oval").html("<p>" + "Сумма O:  " + oval + "</p>");
      $(".xval").html("<p>" + "Сумма X:  " + xval + "</p>");

      // убираю кнопку, после нажатия
      $(".clicktorestart").remove();

    });
  }
  });
});
