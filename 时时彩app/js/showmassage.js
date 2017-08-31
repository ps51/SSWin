$(function(){
	$("#caizhong_mian").click(function(){
		$("#caizhong_shu").fadeToggle();
	})
	
$("#caizhong_shu ul li").each(function () {
        $(this).click(function () {
              $(this).css({"border-color":"red"}).siblings().css({"border-color":"gray"}) ;
              $("#caizhong_mian .caipiao_leixing").text($(this).text());
              $("#caizhong_shu").fadeToggle();
});
}) 

if($("#tress").find("tr td span:last").text()!=""){
    $("#tress").find("tr td span:last").hide();
}



 
})	