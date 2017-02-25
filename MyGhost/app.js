$(function(){
	$(".button").hover(function(){
		$(".tip").stop(true,true);  //清除积累的动画
		var title = $(this).attr("data-title");
		$(".tip em").text(title);
		var pos = $(this).offset().left;
		var dis = ($(".tip").outerWidth()-$(this).outerWidth())/2;
		var f = pos - dis;
	 	$(".tip").css({"left":f+"px","display":"block"}).animate({"top":195,"opacity":1},400);
	 },function(){
	 	$(".tip").animate({"top":160,"opacity":0},400,
	 	function(){
	 		$(".tip").css("display","none");
	 	});
	});
});