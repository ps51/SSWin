// 2017-9-1 
// 时时彩接口数据展示 

           Vue.filter("jiequ", function(value) {   //期号截取后三位
                return value.substring(8);
           });

           Vue.filter("showTime9", function(value) {   //0是否出现
           	var reg = /([0]){1,}/;
                value=value.slice(0,3);
                // console.log(value)
                if(reg.test(value)==true){
                  return 0
                } 
           });
           Vue.filter("showTime", function(value) {   //1是否出现
           	value=value.slice(0,3);
           	var reg = /([1]){1,}/;
                if(reg.test(value)==true){
                	return 1
                } 
           });
           Vue.filter("showTime1", function(value) {   //2是否出现
           	value=value.slice(0,3);
           	var reg = /([2]){1,}/;
                if(reg.test(value)==true){
                	return 2
                } 
           });
           Vue.filter("showTime2", function(value) {   //3是否出现
           	value=value.slice(0,3);
           	var reg = /([3]){1,}/;
                if(reg.test(value)==true){
                        return 3;
                } 
           });
           Vue.filter("showTime3", function(value) {   //4是否出现
           	value=value.slice(0,3);
           	var reg = /([4]){1,}/;
                if(reg.test(value)==true){
                	return 4
                } 
           });
           Vue.filter("showTime4", function(value) {   //5是否出现
           	value=value.slice(0,3);
           	var reg = /([5]){1,}/;
                if(reg.test(value)==true){
                	return 5
                } 
           });
           Vue.filter("showTime5", function(value) {   //6是否出现
           	value=value.slice(0,3);
           	var reg = /([6]){1,}/;
                if(reg.test(value)==true){
                	return 6
                } 
           });
            Vue.filter("showTime6", function(value) {   //7是否出现
            	value=value.slice(0,3);
            var reg = /([7]){1,}/;
                if(reg.test(value)==true){
                  return 7
                } 
           });
             Vue.filter("showTime7", function(value) {   //8是否出现
             	value=value.slice(0,3);
            var reg = /([8]){1,}/;
                if(reg.test(value)==true){
                  return 8
                } 
           });
           Vue.filter("showTime8", function(value) {   //9是否出现
           	value=value.slice(0,3);
            var reg = /([9]){1,}/;
                if(reg.test(value)==true){
                  return 9
                } 
           });
           
            Vue.filter("sames", function(value) {//三个数字相同------豹子
            	value=value.slice(0,3);
                if(parseInt(value.substring(0,1))==parseInt(value.substring(1,2)) && parseInt(value.substring(0,1))==parseInt(value.substring(2,3))&& parseInt(value.substring(2,3))==parseInt(value.substring(1,2))){
//              	var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                return  value="豹子"			
                }
            })
             Vue.filter("sames1", function(value) {//三个数字相同------豹子
            	value=value.slice(0,3);
                if(parseInt(value.substring(0,1))==parseInt(value.substring(1,2)) || parseInt(value.substring(0,1))==parseInt(value.substring(2,3))||parseInt(value.substring(2,3))==parseInt(value.substring(1,2))){
//              	var aa=parseInt(value.substring(0,1))+parseInt(value.substring(1,2))+parseInt(value.substring(2,3));
                return  value="组三"			
                }
            })
var vue = new Vue({
	el:"#app",
	data:{data:""},

created:function(){
	var that=this;
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4) {	
			that.data=eval('(' + xhr.responseText + ')');//转换json
            that.data= that.data.datas.slice(0,30);
		}
	}
	xhr.open("post","http://47.94.140.92:8080/JDLot/type/cqssc/alllist",true);
	xhr.setRequestHeader("Content-Type","application/json");//设置请求头
	xhr.send("PageNum=10&PageSize=10");
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
    xhr.open("post","http://47.94.140.92:8080/JDLot/type/cqssc/alllist",true);
    xhr.setRequestHeader("Content-Type","application/json");//设置请求头
    xhr.send("PageNum=1&PageSize=20");
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
    xhr.open("post","http://47.94.140.92:8080/JDLot/type/cqssc/alllist",true);
    xhr.setRequestHeader("Content-Type","application/json");//设置请求头
    xhr.send("PageNum=1&PageSize=20");
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
    xhr.open("post","http://47.94.140.92:8080/JDLot/type/cqssc/alllist",true);
    xhr.setRequestHeader("Content-Type","application/json");//设置请求头
    xhr.send("PageNum=1&PageSize=20");
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
    xhr.open("post","http://47.94.140.92:8080/JDLot/type/cqssc/alllist",true);
    xhr.setRequestHeader("Content-Type","application/json");//设置请求头
    xhr.send("PageNum=1&PageSize=20");
            }				
	}	
})