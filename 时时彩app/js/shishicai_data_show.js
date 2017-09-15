
$(function(){
         $.ajax({
             type: "post",
             url: "http://47.94.140.92:8080/JDLot/type/cqssc/alllist",
             data: {"PageNum":1,"PageSize":"100"},
             dataType: "json",
             success: function(data){
             	     data=data.datas;
					data=data.slice(0,100);
				console.log(data)
            data_jiequ();//显示数据总分析
             function data_jiequ(){
             	
            var ss0=0,ss1=0,ss2=0,ss3=0,ss4=0,ss5=0,ss6=0,ss7=0,ss8=0,ss9=0;

            var a=0;//遗漏值

            for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number).slice(0,3);
              console.log(bbd)
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==0) {
                  ss0++;
                }
               
                $("#data_yi1").text(a);//遗漏显示
              }
               $("#data_li1").text(ss0);//1初选的次数之和
               
            }
             for (var i = 0; i < data.length; i++) {
               var bbd=(data[i].number).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==1) {
                  ss1++;
                }
              }
               $("#data_li2").text(ss1);
            }

            for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==2) {
                  ss2++;
                }
              }
               $("#data_li3").text(ss2);
            }

             for (var i = 0; i < data.length; i++) {
             var bbd=(data[i].number).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==3) {
                  ss3++;
                }
              }
               $("#data_li4").text(ss3);
            }
             for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==4) {
                  ss4++;
                }
              }
               $("#data_li5").text(ss4);
            }

            for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==5) {
                  ss5++;
                }
              }
               $("#data_li6").text(ss5);
            }


            for (var i = 0; i < data.length; i++) {
             var bbd=(data[i].number).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==6) {
                  ss6++;
                }
              }
               $("#data_li7").text(ss6);
            }

             for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==7) {
                  ss7++;
                }
              }
               $("#data_li8").text(ss7);
            }
             for (var i = 0; i < data.length; i++) {
             var bbd=(data[i].number).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==8) {
                  ss8++;
                }
              }
               $("#data_li9").text(ss8);
            }

            for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==9) {
                  ss9++;
                }
              }
               $("#data_li10").text(ss9);
            }
          }



           $(".data_fenxi").empty();   

            var     html= '<li class="lls lls1">'+
	         		 '<ol>'+
	         			'<li class="fist">出现次数</li>'+
	         			'<li id="data_li1"></li>'+
	         			'<li id="data_li2"></li>'+
	         			'<li id="data_li3"></li>'+
	         			'<li id="data_li4"></li>'+
	         			'<li id="data_li5"></li>'+
	         			'<li id="data_li6"></li>'+
	         			'<li id="data_li7"></li>'+
	         			'<li id="data_li8"></li>'+
	         			'<li id="data_li9"></li>'+
	         			'<li class="last"  id="data_li10"></li>'+
	         		 '</ol>'+
	         	     '</li>'+
	         	'<li class="lls lls2">'+
	         		'<ol>'+
	         			'<li class="fist">平均遗漏</li>'+
	         			'<li id="data_li11"></li>'+
	         			'<li id="data_li12"></li>'+
	         			'<li id="data_li13"></li>'+
	         			'<li id="data_li14"></li>'+
	         			'<li id="data_li15"></li>'+
	         			'<li id="data_li16"></li>'+
	         			'<li id="data_li17"></li>'+
	         			'<li id="data_li18"></li>'+
	         			'<li id="data_li19"></li>'+
	         			'<li id="data_li20" class="last"></li>'+
	         		'</ol>'+
	         	'</li>'+
	         	'<li class="lls lls3">'+
	         		'<ol>'+
	         			'<li class="fist">最大遗漏</li>'+
	         			'<li id="data_li21"></li>'+
	         			'<li id="data_li22"></li>'+
	         			'<li id="data_li23"></li>'+
	         			'<li id="data_li24"></li>'+
	         			'<li id="data_li25"></li>'+
	         			'<li id="data_li26"></li>'+
	         			'<li id="data_li27"></li>'+
	         			'<li id="data_li28"></li>'+
	         			'<li id="data_li29"></li>'+
	         			'<li id="data_li30" class="last"></li>'+
	         		'</ol>'+
	         	'</li>'+
	         	'<li class="lls lls4">'+
	         		'<ol>'+
	         			'<li class="fist">最大连出</li>'+
	         			'<li id="data_li31"></li>'+
	         			'<li id="data_li32"></li>'+
	         			'<li id="data_li33"></li>'+
	         			'<li id="data_li34"></li>'+
	         			'<li id="data_li35"></li>'+
	         			'<li id="data_li36"></li>'+
	         			'<li id="data_li37"></li>'+
	         			'<li id="data_li38"></li>'+
	         			'<li id="data_li39"></li>'+
	         			'<li id="data_li40" class="last"></li>'+
	         		'</ol>'+
	         	'</li>';
	         	$(".data_fenxi").text(html);
	         	function dianji(){ 
 	  data=data.slice(0,30);
      data_jiequ();//显示数据总分析
            
        }
function dianji1(){ 
        data=data.slice(0,50);
        data_jiequ();//显示数据总分析
       
        }

   
function dianji2 (){ 
  	data=data.slice(0,100);
	data_jiequ();//显示数据总分析

}
function dianji3(){ 
  	data=data.slice(0,200);
	data_jiequ();//显示数据总分析

}
	         })
	    
	 }) 

 