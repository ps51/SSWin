$(function(){
	$("#caizhong_mian").click(function(){
		$("#caizhong_shu").fadeToggle();
		$(".sanjiao").toggle();
		$(".daosanjiao").toggle();
	})
	
$("#caizhong_shu ul li").each(function () {
        $(this).click(function () {
              $(this).css({
              	"border-color":"red",
                 "background":"url(./img/massage/选中@3x.png) no-repeat right bottom",
               "background-size":"20% 50%"
          }).siblings().css({"border-color":"gray","background":"none"}) ;
              $("#caizhong_mian .caipiao_leixing").text($(this).text());
              $("#caizhong_shu").fadeToggle();
});
}) 


 
})	