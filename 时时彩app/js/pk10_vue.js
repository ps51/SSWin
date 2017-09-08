

Vue.filter("jiequ", function(value) {   //期号截取后三位
                return value.substring(3);
           });

//前三位奖好处理
           Vue.filter("showTime0", function(value) {   //1是否出现
                    var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i] == "1"){
                            // console.log(value[i])
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime1", function(value) {   //2是否出现
           var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="2"){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime2", function(value) {   //3是否出现
           var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length)
            for (var i = 0; i < value.length; i++) {
                        if(value[i]=="3"){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime3", function(value) {   //4是否出现
           var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="4"){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime4", function(value) {   //5是否出现
           var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length)
             for (var i = 0; i < value.length; i++) {
                        if(value[i]=="5"){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime5", function(value) {   //6是否出现
           var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="6"){
                            return value[i]
                        }
                 }
           });
            Vue.filter("showTime6", function(value) {   //7是否出现
              var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="7"){
                            return value[i]
                        }
                 }
           });
             Vue.filter("showTime7", function(value) {   //8是否出现
               var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="8"){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime8", function(value) {   //9是否出现
            var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="9"){
                            return value[i]
                        }
                 }
           });
            Vue.filter("showTime9", function(value) {   //10是否出现
                var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length)
                 for (var i = 0; i < value.length; i++) {
                        if(value[i]=="10"){
                            return value[i]
                        }
                 }
           });

            Vue.filter("sum", function(value) {//求前三个号码的和值
                 var aa = value.split(",");
                    value=aa.slice(0,3);
                    // console.log(value.length);
                 var sum =0
                 for (var i = 0; i < value.length; i++) {
                    sum+=parseInt(value[i]);
                 }
                        return sum 
                });

// 前二号码分布图处理
 Vue.filter("showTime00", function(value) {   //1是否出现
                    var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i] == "1"){
                            // console.log(value[i])
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime01", function(value) {   //2是否出现
           var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="2"){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime02", function(value) {   //3是否出现
           var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length)
            for (var i = 0; i < value.length; i++) {
                        if(value[i]=="3"){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime03", function(value) {   //4是否出现
           var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="4"){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime04", function(value) {   //5是否出现
           var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length)
             for (var i = 0; i < value.length; i++) {
                        if(value[i]=="5"){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime05", function(value) {   //6是否出现
           var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="6"){
                            return value[i]
                        }
                 }
           });
            Vue.filter("showTime06", function(value) {   //7是否出现
              var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="7"){
                            return value[i]
                        }
                 }
           });
             Vue.filter("showTime07", function(value) {   //8是否出现
               var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="8"){
                            return value[i]
                        }
                 }
           });
           Vue.filter("showTime08", function(value) {   //9是否出现
            var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length)
              for (var i = 0; i < value.length; i++) {
                        if(value[i]=="9"){
                            return value[i]
                        }
                 }
           });
            Vue.filter("showTime09", function(value) {   //10是否出现
                var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length)
                 for (var i = 0; i < value.length; i++) {
                        if(value[i]=="10"){
                            return value[i]
                        }
                 }
           });

            Vue.filter("sum1", function(value) {//求前三个号码的和值
                 var aa = value.split(",");
                    value=aa.slice(0,2);
                    // console.log(value.length);
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
            var data= that.data;
            var ss0=0,ss1=0,ss2=0,ss3=0,ss4=0,ss5=0,ss6=0,ss7=0,ss8=0,ss9=0;

            var a=0;//遗漏值

            for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number.split(",")).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==1) {
                  ss0++;
                }
               
                $("#data_yi1").text(a);//遗漏显示
              }
               $("#data_li1").text(ss0);//1初选的次数之和
               
            }
             for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number.split(",")).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==2) {
                  ss1++;
                }
              }
               $("#data_li2").text(ss1);
            }

            for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number.split(",")).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==3) {
                  ss2++;
                }
              }
               $("#data_li3").text(ss2);
            }

             for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number.split(",")).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==4) {
                  ss3++;
                }
              }
               $("#data_li4").text(ss3);
            }
             for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number.split(",")).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==5) {
                  ss4++;
                }
              }
               $("#data_li5").text(ss4);
            }

            for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number.split(",")).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==6) {
                  ss5++;
                }
              }
               $("#data_li6").text(ss5);
            }


            for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number.split(",")).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==7) {
                  ss6++;
                }
              }
               $("#data_li7").text(ss6);
            }

             for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number.split(",")).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==8) {
                  ss7++;
                }
              }
               $("#data_li8").text(ss7);
            }
             for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number.split(",")).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==9) {
                  ss8++;
                }
              }
               $("#data_li9").text(ss8);
            }

            for (var i = 0; i < data.length; i++) {
              var bbd=(data[i].number.split(",")).slice(0,3);
              for (var j = 0; j < bbd.length; j++) {
                if (bbd[j]==10) {
                  ss9++;
                }
              }
               $("#data_li10").text(ss9);
            }
		}
	}
	xhr.open("post","http://47.94.140.92:8080/JDLot/type/pk10/alllist",true);
	xhr.setRequestHeader("Content-Type","application/json");//设置请求头
	xhr.send();
		},
	methods:{
		    dianji:function (){ //30个数据时
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
          dianji1: function (){ //50个数据时
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
          dianji2:  function (){ //100个数据时
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
           dianji3: function (){ //200个数据时
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