console.log("hello world");

$(function(){

	$("button").on("mouseover",function(){
		$("#name").css("color","blue","font-size","20");
		$("#image").attr("src","https://cdn4.vtourist.com/14/3975206.jpg");


	});

	$(window).on("resize",function(){
		console.log("resized");
	});


});