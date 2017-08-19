
$("#star_map").click(function(){
$("div#home_img_paste").html("<img id='starmap_1' src='main_styles/starmap_1.png'>");

$("div#text_before_img_heading").html("<h3>Звезды</h3>");
$("div#text_before_img").html("В StarMap можно найти информацию о звездах и созвездиях северной части небесной сферы, а также увидеть где расположена звезда или созвездие на ПКЗН.");

return false; 
});

$("#planet_map").click(function(){
	$("div#home_img_paste").html("<img id='starmap_1' src='main_styles/planetmap_1.png'>");

$("div#text_before_img_heading").html("<h3>Планеты</h3>");
$("div#text_before_img").html("В StarMap представлено расположение планет солнечной системы. Расположение планет является таким же, как и в реальности. Вы также можете управлять временем, поэтому программа с легкостью отобразит положение планет в любой день.");
return false; 
});
