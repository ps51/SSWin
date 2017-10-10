$(function(){
	$("#caizhong_mian").click(function(){
		$("#caizhong_shu").toggle();
		$(".sanjiao").toggle();
		$(".daosanjiao").toggle();
	})

$("#inputs9").click(function(){
  $(".data_fenxi").show();
})
 $("#inputs10").click(function(){
  $(".data_fenxi").hide();
})

$(".ones").on('click',function(){
  $(this).addClass("colors_red").siblings().removeClass("colors_red");
})
})	

