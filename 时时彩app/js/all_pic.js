$(function(){
function GetRequest() {
var url = location.search; //获取url中"?"符后的字串
var theRequest = new Object();
if (url.indexOf("?") != -1) {
var str = url.substr(1);
strs = str.split("&");
for(var i = 0; i < strs.length; i ++) {
theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
}
}
return theRequest;
}
var Request = new Object();
Request = GetRequest()
if(Request["uid"]!=undefined){
var uid = Request["uid"];
}
console.log(uid)

$.ajax({
             type: "post",
             url: "https://www.jindi163.com:8443/JDLot/lottype/pagelist",
             data: {"uid":uid,"PageSize":"100"},
             async:true,
             dataType: "json",
             contentType:"application/json",
             success: function(data){
                   data=data.datas;
                   console.log(data)
                   $('#caizhongjiekou').empty();  
                   var html="";
                    // if (uid!="") {
                    //   return uid
                    // }else{
                    //   uid="";
                    // }
                   $.each(data,function(i){
                      var good_name=data[i].lottery_name;
                      var good=good_name.substring(5);
                          good=good+"_trend.html?uid=";//链接
                        
                       var sss= data[0].lottery_full_name;
                       console.log(sss)
                       $(".caipiao_leixing").text(sss)
                      html+='<li><a href="'+good+uid+'">'+data[i].lottery_full_name+'</a></li>'
                   })
                   $('#caizhongjiekou').append(html)
                 }

       })
})