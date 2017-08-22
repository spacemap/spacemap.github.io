﻿
$('#planet_folder').click(function(){
$('div#tut_photo_1').html("<img id='starmap_1' src='howtouse_styles/cursor_tut.png'>");
$('div#tut_photo_2').html("<img id='starmap_1' src='howtouse_styles/info_tut.png'>");
$('div#tut_photo_3').html("<img id='starmap_1' src='howtouse_styles/planetmotion_tut.png'>");
$('div#tut_photo_4').html("<img id='starmap_1' src='howtouse_styles/showfuture_tut.png'>");


$("div#tut_text_1_heading").html("<h3>Планеты земной группы</h3>");
$("div#tut_text_2_heading").html("<h3>Информация об объектах</h3>");
$("div#tut_text_3_heading").html("<h3>Анимация</h3>");
$("div#tut_text_4_heading").html("<h3>Положение планет</h3>");

$("div#tut_text_1").html("Если Вы захотели поближе рассмотреть планеты земной группы, то Вам нужно лишь навести курсор на орбиту Марса, и увеличенная версия этого участка карты отобразится в правом нижнем углу.");
$("div#tut_text_2").html("Как и в разделе 'Звезды и созвездия' информация о всех небесных объектах выдается по щелчку на них в списке справа от карты.");
$("div#tut_text_3").html("Чтобы посмотреть за реальным движением планет Вы можете включить анимацию. Прокручивая колёсеко мышки можно управлять скоростью течения времени (его даже можно обратить вспять).");
$("div#tut_text_4").html("Если Вам нужно узнать расположение планет в какой-то конкретный день, то вбейте дату в отведенные для этого поля, и программа отобразит положение планет в тот день.");

return false;
});


$('#star_folder').click(function(){

$('div#tut_photo_1').html("<img id='starmap_1' src='howtouse_styles/constel_tut.png'>");
$('div#tut_photo_2').html("<img id='starmap_1' src='howtouse_styles/localsky_tut.png'>");
$('div#tut_photo_3').html("<img id='starmap_1' src='howtouse_styles/scope_tut.png'>");
$('div#tut_photo_4').html("<img id='starmap_1' src='howtouse_styles/expsearch_tut.png'>");


$("div#tut_text_1_heading").html("<h3>Поиск созвездий</h3>");
$("div#tut_text_2_heading").html("<h3>Локальное небо</h3>");
$("div#tut_text_3_heading").html("<h3>Лупа</h3>");
$("div#tut_text_4_heading").html("<h3>Расширенный поиск</h3>");

$("div#tut_text_1").html("В Spacemap можно найти информацию о созвездиях северной части небесной сферы, для этого нужно лишь вбить имя искомого созвездия в поисковую строку. После этого программа отобразит на карте только это созвездие и выведет список всех звезд, которые состоят в данном созвездии. По щелчку на элемент списка, вы сможете узнать всю информацию о звезде.");
$("div#tut_text_2").html("Если Вы хотите узнать какие звезды можно наблюдать при хороших погодных условиях в Вашем регионе, то стоит просто вбить нужную дату и время в поля ввода, и после этого на карте отобразятся все звезды, которые можно увидеть.");
$("div#tut_text_3").html("Если Вам сложно понять что находится в том или ином участке карты, или созвездие слишком мало чтобы его увидеть, то Вы можете воспользоваться лупой: после ее активации наведите курсор на непонятное место на карте, и регулируйте разрешение колесиком мышки.");
$("div#tut_text_4").html("В Spacemap есть функция расширенного поиска, которая позволяет найти все звезды, удволетворяющие введенным пользователем параметрам. При щелчке на подходящую звезду на карте отобразится ее положение и выведется вся информация о ней.");


return false;
});