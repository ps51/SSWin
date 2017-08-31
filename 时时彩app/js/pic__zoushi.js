	window.onload=function(){
	
//	选项卡功能
	var back_pre = document.getElementsByClassName("back_pre");
	back_pre.onclick=function(){
		history.go(-1)
	}
var tabs=function(){
    function tag(name,elem){
        return (elem||document).getElementsByTagName(name);
    }
    //获得相应ID的元素
    function id(name){
        return document.getElementById(name);
    }
    function first(elem){
        elem=elem.firstChild;
        return elem&&elem.nodeType==1? elem:next(elem);
    }
    function next(elem){
        do{
            elem=elem.nextSibling;  
        }while(
            elem&&elem.nodeType!=1  
        )
        return elem;
    }
    return {
        set:function(elemId,tabId){
            var elem=tag("li",id(elemId));
            var tabs=tag("div",id(tabId));
            var listNum=elem.length;
            var tabNum=tabs.length;
            for(var i=0;i<listNum;i++){
                    elem[i].onclick=(function(i){
                        return function(){
                            for(var j=0;j<tabNum;j++){
                                if(i==j){
                                    tabs[j].style.display="block";
                                    //alert(elem[j].firstChild);
                                    elem[j].firstChild.className="selected";
                                }
                                else{
                                    tabs[j].style.display="none";
                                    elem[j].firstChild.className="";
                                }
                            }
                        }
                    })(i)
            }
        }
    }
}();
tabs.set("nav","menu_con");//执行



	
	
	
	
//	数据展示部分代码块
//过滤器
            Vue.filter("jiequ", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
                return value.substring(8);
           });
           
           Vue.filter("showTime", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
           	var reg = /([1]){1,}/;
                if(reg.test(value)==true){
                	return 1
                } 
           });
           Vue.filter("showTime1", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
           	var reg = /([2]){1,}/;
                if(reg.test(value)==true){
                	return 2
                } 
           });
           Vue.filter("showTime2", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
           	var reg = /([3]){1,}/;
                if(reg.test(value)==true){
                	return 3
                } 
           });
           Vue.filter("showTime3", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
           	var reg = /([4]){1,}/;
                if(reg.test(value)==true){
                	return 4
                } 
           });
           Vue.filter("showTime4", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
           	var reg = /([5]){1,}/;
                if(reg.test(value)==true){
                	return 5
                } 
           });
           Vue.filter("showTime5", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
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
				}
			}
			xhr.open("post","http://47.94.140.92:8080/JDLot/type/jsks/alllist",true);
			xhr.setRequestHeader("Content-Type","application/json");//设置请求头
			xhr.send("PageNum=2&PageSize=220");
				},
			methods:{
				productDetial: function () {//切换组件显示1  
			        if(!$("#tress td span.changches").val()){ 
			        	this.show=false;
			        }
			        else{
			        		this.show=true    
			        	}
				}				
			}	
	})
	
		var vue2=new Vue({
				el:"#apps",
				data:{data:""},	
		created:function(){
			var that=this;
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if (xhr.readyState==4) {	
					that.data=eval('(' + xhr.responseText + ')');//转换json
				}
			}
			xhr.open("post","http://47.94.140.92:8080/JDLot/type/jsks/alllist",true);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//设置请求头
			xhr.send("PageNum=2&PageSize=30");
				}
	})
}

