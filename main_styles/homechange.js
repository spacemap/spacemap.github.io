
$("#star_map").click(function(){
$("#starmap_1").attr({
src:'main_styles/starmap_1.png'
});
$("div#text_before_img_heading").html("<h3>������</h3>");
$("div#text_before_img").html("� StarMap ����� ����� ���������� � ������� � ���������� �������� ����� �������� �����, � ����� ������� ��� ����������� ������ ��� ��������� �� ����.");

return false; 
});

$("#planet_map").click(function(){
$("#starmap_1").attr({
src:'main_styles/planetmap_1.png'
});
$("div#text_before_img_heading").html("<h3>�������</h3>");
$("div#text_before_img").html("� StarMap ������������ ������������ ������ ��������� �������. ������������ ������ �������� ����� ��, ��� � � ����������. �� ����� ������ ��������� ��������, ������� ��������� � ��������� ��������� ��������� ������ � ����� ����.");
return false; 
});
