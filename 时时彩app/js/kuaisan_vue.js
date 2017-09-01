	// 2017-9-1
  // 江苏快三数据展示
//	数据展示部分代码块
//过滤器
            Vue.filter("jiequ", function(value) {   
                return value.substring(8);
           });
           
           Vue.filter("showTime", function(value) {  
           	var reg = /([1]){1,}/;
                if(reg.test(value)==true){
                	return 1
                } 
           });
           Vue.filter("showTime1", function(value) {  
           	var reg = /([2]){1,}/;
                if(reg.test(value)==true){
                	return 2
                } 
           });
           Vue.filter("showTime2", function(value) { 
           	var reg = /([3]){1,}/;
                if(reg.test(value)==true){
                        return 3;
                } 
           });
           Vue.filter("showTime3", function(value) { 
           	var reg = /([4]){1,}/;
                if(reg.test(value)==true){
                	return 4
                } 
           });
           Vue.filter("showTime4", function(value) { 
           	var reg = /([5]){1,}/;
                if(reg.test(value)==true){
                	return 5
                } 
           });
           Vue.filter("showTime5", function(value) { 
           	var reg = /([6]){1,}/;
                if(reg.test(value)==true){
                	return 6
                } 
           });
           
           
           
           
           
             Vue.filter("sum", function(value) {//求和
                var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                return  aa;
            });
           
            Vue.filter("sum0", function(value) {//求和
                if(parseInt(value.substring(0,1))==parseInt(value.substring(1,2)) && parseInt(value.substring(0,1))==parseInt(value.substring(2,3))&& parseInt(value.substring(2,3))==parseInt(value.substring(1,2))){
//              	var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                return  value="三同"			
                }else{
                	if ($("#tress td span.changches ").val() == " ") {
	$(this).hide();
} else{
	$(this).show();
}
                	 
                }
               
            });
            Vue.filter("sum01", function(value) {//求和
                if(parseInt(value.substring(0,1))==parseInt(value.substring(1,2)) || parseInt(value.substring(0,1))==parseInt(value.substring(2,3))|| parseInt(value.substring(2,3))==parseInt(value.substring(1,2))){
//              	var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                return  value="二同"
                	return
                }
               
            });
             Vue.filter("sum02", function(value) {//求和
                if(parseInt(value.substring(0,1))!=parseInt(value.substring(1,2)) && parseInt(value.substring(0,1))!=parseInt(value.substring(2,3))&& parseInt(value.substring(2,3))!=parseInt(value.substring(1,2))){
                	
                return  value="不同"					
                }
               
            });
            Vue.filter("sum_1", function(value) {//求和
                var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                if (aa ==3 || aa == 18) {
                	return aa;
                }
            });
             Vue.filter("sum_2", function(value) {//求和
                var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                if (aa ==4 || aa == 17) {
                	return aa;
                }
            });
             Vue.filter("sum_3", function(value) {//求和
                var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                if (aa ==5 || aa == 16) {
                	return aa;
                }
            });
             Vue.filter("sum_4", function(value) {//求和
                var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                if (aa ==6 || aa == 15) {
                	return aa;
                }
            });
             Vue.filter("sum_5", function(value) {//求和
                var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                if (aa ==7 || aa == 14) {
                	return aa;
                }
            });
             Vue.filter("sum_6", function(value) {//求和
                var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                if (aa ==8 || aa == 13) {
                	return aa;
                }
            });
             Vue.filter("sum_7", function(value) {//求和
                var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                if (aa ==9 || aa == 12) {
                	return aa;
                }
            });
             Vue.filter("sum_8", function(value) {//求和
                var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                if (aa ==10 || aa == 11) {
            
                	return aa;
                }
            });
	var vue=new Vue({
				el:"#app",
				data:{
					data:"",
				    show:true
				},
		created:function(){
			var that=this;
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if (xhr.readyState==4) {	
					that.data=eval('(' + xhr.responseText + ')');//转换json
                    that.data= that.data.datas.slice(0,30);
				}
			}
			xhr.open("post","http://47.94.140.92:8080/JDLot/type/jsks/alllist",true);
			xhr.setRequestHeader("Content-Type","application/json");//设置请求头
			xhr.send("PageNum=2&PageSize=220");
				},
			methods:{
				    dianji:function (){ 
                        var that=this;
                  var xhr=new XMLHttpRequest();
                  xhr.onreadystatechange=function(){
                if (xhr.readyState==4) {    
                    that.data=eval('(' + xhr.responseText + ')');//转换json
                    that.data= that.data.datas.slice(0,30);
                }
            }
            xhr.open("post","http://47.94.140.92:8080/JDLot/type/jsks/alllist",true);
            xhr.setRequestHeader("Content-Type","application/json");//设置请求头
            xhr.send("PageNum=2&PageSize=220");
                    },
                  dianji1: function (){ 
                        var that=this;
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function(){
                if (xhr.readyState==4) {    
                    that.data=eval('(' + xhr.responseText + ')');//转换json
                    that.data= that.data.datas.slice(0,50);
                }
            }
            xhr.open("post","http://47.94.140.92:8080/JDLot/type/jsks/alllist",true);
            xhr.setRequestHeader("Content-Type","application/json");//设置请求头
            xhr.send("PageNum=2&PageSize=220");
                    },
                  dianji2:  function (){ 
                        var that=this;
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function(){
                if (xhr.readyState==4) {    
                    that.data=eval('(' + xhr.responseText + ')');//转换json
                    that.data= that.data.datas.slice(0,100);
                }
            }
            xhr.open("post","http://47.94.140.92:8080/JDLot/type/jsks/alllist",true);
            xhr.setRequestHeader("Content-Type","application/json");//设置请求头
            xhr.send("PageNum=2&PageSize=220");
                    },
                   dianji3: function (){ 
                      var that=this;
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function(){
                if (xhr.readyState==4) {    
                    that.data=eval('(' + xhr.responseText + ')');//转换json
                    that.data= that.data.datas.slice(0,200);
                }
            }
            xhr.open("post","http://47.94.140.92:8080/JDLot/type/jsks/alllist",true);
            xhr.setRequestHeader("Content-Type","application/json");//设置请求头
            xhr.send("PageNum=1&PageSize=200");
                    }				
			}	
	})