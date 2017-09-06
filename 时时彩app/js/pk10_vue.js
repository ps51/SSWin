

Vue.filter("jiequ", function(value) {   //期号截取后三位
                return value.substring(3);
           });

//前三位奖好处理
           Vue.filter("showTime", function(value) {   //1是否出现
            var aa = value.split(",");
                    value=aa.slice(0,3);
              for (var i = 0; i < value.length; i++) {
                        if(value[i] == 1){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime1", function(value) {   //2是否出现
           var aa = value.split(",");
                    value=aa.slice(0,3);
              for (var i = 0; i < value.length; i++) {
                        if(value[i]==2){
                            return 2
                        }
                 }
           });
           Vue.filter("showTime2", function(value) {   //3是否出现
            var aa = value.split(",");
                    value=aa.slice(0,3);
            for (var i = 0; i < value.length; i++) {
                        if(value[i]==3){
                            return 3
                        }
                 }
           });
           Vue.filter("showTime3", function(value) {   //4是否出现
           var aa = value.split(",");
                    value=aa.slice(0,3);
              for (var i = 0; i < value.length; i++) {
                        if(value[i]==4){
                            return 4
                        }
                 }
           });
           Vue.filter("showTime4", function(value) {   //5是否出现
            var aa = value.split(",");
                    value=aa.slice(0,3);
             for (var i = 0; i < value.length; i++) {
                        if(value[i]==5){
                            return 5
                        }
                 }
           });
           Vue.filter("showTime5", function(value) {   //6是否出现
           var aa = value.split(",");
                    value=aa.slice(0,3);
              for (var i = 0; i < value.length; i++) {
                        if(value[i]==6){
                            return 6
                        }
                 }
           });
            Vue.filter("showTime6", function(value) {   //7是否出现
               var aa = value.split(",");
                    value=aa.slice(0,3);
              for (var i = 0; i < value.length; i++) {
                        if(value[i]==7){
                            return 7
                        }
                 }
           });
             Vue.filter("showTime7", function(value) {   //8是否出现
               var aa = value.split(",");
                    value=aa.slice(0,3);
              for (var i = 0; i < value.length; i++) {
                        if(value[i]==8){
                            return 8
                        }
                 }
           });
           Vue.filter("showTime8", function(value) {   //9是否出现
            var aa = value.split(",");
                    value=aa.slice(0,3);
              for (var i = 0; i < value.length; i++) {
                        if(value[i]==9){
                            return 9
                        }
                 }
           });
            Vue.filter("showTime9", function(value) {   //0是否出现
                var aa = value.split(",");
                    value=aa.slice(0,3);
                 for (var i = 0; i < value.length; i++) {
                        if(value[i]==10){
                            return 10
                        }
                 }
           });

            Vue.filter("sum", function(value) {
            
                 var aa = value.split(",");
                    value=aa.slice(0,3);
                    console.log(value.length)
                 var sum =0
                 for (var i = 0; i < value.length; i++) {
                    sum+=parseInt(value[i]);
                 }
                 return sum 
                });


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
            console.log(that.data)
		}
	}
	xhr.open("post","http://47.94.140.92:8080/JDLot/type/pk10/alllist",true);
	xhr.setRequestHeader("Content-Type","application/json");//设置请求头
	xhr.send("PageNum=1&PageSize=10");
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
    xhr.open("post","http://47.94.140.92:8080/JDLot/type/pk10/alllist",true);
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
    xhr.open("post","http://47.94.140.92:8080/JDLot/type/pk10/alllist",true);
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
    xhr.open("post","http://47.94.140.92:8080/JDLot/type/pk10/alllist",true);
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
    xhr.open("post","http://47.94.140.92:8080/JDLot/type/pk10/alllist",true);
    xhr.setRequestHeader("Content-Type","application/json");//设置请求头
    xhr.send("PageNum=1&PageSize=20");
            }				
	}	
})