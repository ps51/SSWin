$(function(){

//获取uid方法
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
      Request = GetRequest();
      if(Request["uid"]!=undefined){
      var uid = Request["uid"];
}
 
// console.log(uid)
// 默认样式代码开始
      $.ajax({//第一层选择彩种
            type:"post",
            url: "https://www.jindi163.com:8443/JDLot/lottype/pagelist",//追号计划需要uid
            data: {"uid":uid,"PageSize":"100"}, 
            dataType: "json",
            contentType:"application/json",
            async:true,
             beforeSend: function(XMLHttpRequest) {
                              $("body").append('<div  id="load" style="z-index:1; position:fixed; top:0;left:0;right:0;bottom:0;margin:auto;width:4rem;height:4rem"><img alt="数据加载中..." src="img/massage/4c3ba25d7384dee10d565e7f20c89400_t014be238bb089e1e42.gif" style="width:100%"/></div>'); },
            success: function(data){
                 data=data.datas;
                 console.log(data);
                 $('#caizhongjiekou').empty();
                 var good_html=new Array();
                 var full_name=new Array();
                 var html="";//文本内容               
                 var good="";
                 var fisrt="";//获取第一个 
                 var caizhong="";
                 var consrt="";
                 var name_id="";
                 var all_name="";
                 var first_name="";
                 $.each(data,function(i){
                          fisrt=data[0].lottery_full_name;//获取第一个的彩种名称
                          var good_name=data[i].lottery_name;//获取所有的html
                          good=good_name.substring(5);
                          all_name=data[i].lottery_full_name;
                          good_html.push(good);//获取所有的彩种的数组
                          full_name.push(all_name);
                     html+='<li><a href="#">'+data[i].lottery_full_name+'</a></li>';      
                })

                  $('#caizhongjiekou').html(html);//将彩票彩种添加到$('#caizhongjiekou')上
                  $(".caipiao_leixing").text(fisrt);//默认的彩种列表
                      caizhong=good_html[0];//默认的第一个彩种
                      // console.log(caizhong)
                      var plan=good_html[0];
                       first_name=full_name[0];
                      begins();
          $("#caizhong_shu #caizhongjiekou li").each( function(i){//点击彩种时的---- 快三 时时彩。。----
                         $(this).click(function () {
                            var index=i;
                                       //获取点击当前的彩种的名称------bjpk10   cqssc...---------

                            $(".caipiao_leixing").text("");//将默认的数据去除
                            
                            $(this).css({//给当前的点击的元素添加样式
                              "border-color":"red",
                               "background":"url(./img/massage/checked3x.png) no-repeat right bottom",
                             "background-size":"20% 50%"
                        }).siblings().css({"border-color":"gray","background":"none"});
                            $(".caipiao_leixing").text(($(this).text()));
                            $("#caizhong_shu").hide();
                            $(".sanjiao").show();
                            $(".daosanjiao").hide();
                            caizhong=good_html[index];
                            plan=good_html[index]; 
                            first_name=full_name[index];
                        // var alinks='<a href="'+first_name+'">';
                            // $(".set_massage").html(alinks)
                            // alert(plan) 
                            begins();
          });
                         
      });
                // var   consrt="";
                // var name_id="";
                  
                   function begins(){//计划的接口函数---期数  A B C------
                       $.ajax({
                          type:"post",
                          url:"https://www.jindi163.com:8443/JDLot/lot/plan/jdlot/list",
                           //plan_name:二期和值"  child_name："A"    plan_id:"2_2_20_3_a_3"    
                          data: {"uid":uid,"PageSize":"100","lot_name":caizhong},   
                          dataType: "json",
                          contentType:"application/json",
                          async:true,
                          success: function(data){ 
                                  var  data=data.datas;
                                  // console.log(data)
                                  var huadong='';
                                  var pian_show="";
                                  var plan_id="";
                                  var plan_content=new Array();
                                   consrt=data[0].plan_content;//默认为第一个 .ones 下的数据
                              for (var k = 0; k < data.length; k++) {
                               
                                    huadong+='<span class="ones"><p>'+data[k].plan_name+'</p></span>';
                              
                            }
                                   $(".tabClick").empty();//将默认的内容清空
                                    $(".car_img").html(huadong)//滑动部分的内容
                                    for ( var i = 0; i < consrt.length; i++) {
                                          var arrs_child=consrt[i].child_name;
                                          var name_id=consrt[i].plan_id;
                                        // console.log(name_id)
                                          pian_show+='<li class="plan">'+arrs_child+'</li>';//计划A B C显示
                                   }
                                     $(".tabClick").append(pian_show)//选择ABC的内容
                                    huaMove();//滑动调用
                               $(".ones").eq(0).addClass("colors_red");
                               $(".ones").each(function(i){
                                    $(this).click(function(){

                                    $(this).addClass("colors_red").siblings().removeClass("colors_red");
                                      var index= i;
                                    
                                      consrt=data[index].plan_content;
                                       // console.log(consrt)
                                    $(".tabClick").empty();
                                      var pshow="";
                                       for (var k = 0; k < consrt.length; k++) {
                                      
                                      var childs_nm=consrt[k].child_name;
                                      pshow+='<li class="plan">'+childs_nm+'</li>'; 
                                         // console.log(childs_nm);
                                         
                                       }
                                    $(".tabClick").append(pshow);
                                       // console.log($(".tabClick li").length);

                                      name_id=consrt[0].plan_id;
                                        
                                      planABC()
                                      clcik_lis();                   
                      })

            })           
                                     
                                
          
                planABC()
                              
              function planABC(){
                name_id=consrt[0].plan_id;
                $(".plan").eq(0).addClass("active");
              $(".plan").each(function(i){
                       $(this).click(function(){
                         var index=i;
                        name_id="";
                        $(this).addClass("active").siblings().removeClass("active");
                        name_id=consrt[i].plan_id;
                        // alert(name_id)
                clcik_lis();//每点击一次A B C调用第三个接口，实现数据交互
                       })
              })
              }    
                clcik_lis();//默认时调用
              function clcik_lis(){ 
                // console.log(plan+"------"+name_id)
                    $.ajax({  
                            type:"post", 
                            url:"https://www.jindi163.com:8443/JDLot/lot/plan/slist",//all 数据展示部分
                            data: {"uid":uid,"lottery_name":plan,"plan_id":name_id,"PageSize":"100"},  
                            dataType: "json",
                            contentType:"application/json",
                            async:true,
                            
                            success: function(data){ 
                                var   data=data.datas;
                                  // console.log(data)
                                  $("#dingwei_jihua").empty();
                                  // var jihua_lis="";//计划列表
                                   var jihua_lis = '<li>'+
                                                    '<table>'+
                                                    '<tr>'+
                                                    '<th class="th_data1">期号</th>'+

                                                    '<th class="th_data2">计划</th>'+
                                                    '<th class="th_data3 lasts">回顾</th>'+
                                                    '</tr>'; 
                                var data_r="";
                                var data_w="";
                                var aas="";
                                var shuju_show="";
                               $.each(data, function(i){
                                 var results=data[i].result;
                                            console.log(results);
                                            var successful="";
                                            if (results=="" && i==0) {
                                              successful="开奖中";
                                            } else if(results==2 && i==0){
                                              successful="开奖中";
                                            }else if(results==(-1) && i==0){
                                              successful="未开奖";
                                            }else if(results!=0){
                                              successful="✔";
                                            }else {
                                              successful="✘";
                                            }
                                        var    end= data[i].period_end;
                                        var    start= data[i].period_start;
                                           if ( (end.length ||start.length)>3){
                                               end=  end.substring(3);
                                               start= start.substring(3)
                                           }else{
                                                end=  end.substring(0,3);
                                               start= start.substring(0,3);
                                           }
                                           shuju_show=data[0].code_num;
                                          
                                         jihua_lis+= '<tr>'+
                                                   '<td class="th_data1">'+start+'-'+end+'</td>'+
                                                   '<td class="th_data2 sures"><button class="goumai" style="border:none;display:none">购买计划</button><span class="iskong">'+data[i].code_num+'</span></td>'+
                                                   '<td class="th_data3 lasts lasts_success" id="lasts_success">'+successful+'</td>'+    //回顾信息判断，如果匹配三期中的数据就返回“对”，否则“error”
                                                   '</tr>';
                                                   if (data[i].result !=0) {
                                                         data_r++; 
                                                    } 
                                                     aas=data.slice(0,20);
                                                    return aas
                                              
                                        });

                                         for (var j = 0; j < aas.length; j++) {
                                                      if (data[j].result !=0) {
                                                          data_w++;
                                                      } 
                                                    }
                                      jihua_lis=jihua_lis+'</table></li>';
                                      $("#dingwei_jihua").html(jihua_lis);

                                      if (shuju_show=="") {
                                        // alert(1);
                                        $("#dingwei_jihua li table tr:eq(1) .sures .goumai").show()
                                      } else {
                                        // alert(2);
                                        $("#dingwei_jihua li table tr:eq(1) .sures .goumai").hide()
                                      }
                                     
                                      $(".ccs1").text(parseInt((data_r/(data.length-1))*100)+"%");
                                      $(".ccs2").text(parseInt((data_w/(aas.length-1))*100)+"%");


                                
                                  $("#dingwei_jihua li table tr:eq(1) .sures .goumai").click(function(){
                                          var u = navigator.userAgent; 
                                          isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
                                          isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                                              if (isiOS==true) {
                                                    testClick()
                                              } else {
                                                    jsFun()
                                              }
                                              
                                  })
                                  function testClick(){
                                    var str1="type_"+plan;
                                    var str2= first_name;
                                    passValue(str1,str2);
                                  }
                                  function jsFun(){
                                    var str1="type_"+plan;
                                    var str2= first_name;
                                      android.fun1(str1,str2);//别名首字母默认会被处理成小写，所以为了避免调用出错，最好统一采用小写字母
                                  
                                  }


//          function downApp(){
//                       var u = navigator.userAgent, 
//                       isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
//                       isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
//                       urls = {
//                           'android':'http://ftp-apk.pcauto.com.cn/pub/autoclub-5000-autowapDL1.apk',
//                           'ios':'https://itunes.apple.com/cn/app/zhong-guo-che-you-hui/id640447959',
//                           // 'other':'http://www1.pcauto.com.cn/app/20141120/pcautoapp/index.html'
//                       };
//                       //三元运算
//                       // window.location.href = isAndroid? urls.android : isiOS? urls.ios : urls.other;
//                       // 简化
//                       if(isAndroid){
//                         window.location.href=urls.android;
//                       }else if(isiOS){
//                         window.location.href=urls.ios;
//                       }
//                       else{
//                        window.location.href=urls.other;
//                       }
// //JS端主要代码

//     }
                                    }
                                  })
                                }
                            }
                       })
// 默认样式代码完成         
        }

     },
      complete: function(XMLHttpRequest, textStatus) {$("#load").remove(); }
})

// 滑动部分的js样式
function huaMove(){
                  $(document).ready(function() {
                      var imgObj = document.getElementsByClassName("ones");
                      var imgLen = imgObj.length;
                      var windowWidth = $(".ones").width();
                      $(".ones").on("click",function(event){

                      });
                      // int = setInterval(carouselImg,3000);
                      for(var i=0;i<imgLen;i++){
                          $(".ones").eq(i).css({"top":"0","left":i*windowWidth});
                          imgObj[i].addEventListener('touchstart',touchstart,false);
                          imgObj[i].addEventListener('touchmove',touchmove,false);
                          imgObj[i].addEventListener('touchend',touchend,false);
                      }
                      


                  function touchstart(event){

                      if( event.targetTouches.length == 1 )
                      {
                          var touch = event.targetTouches[0];
                              pressX = touch.pageX;
                      }
                  }

                  /*
                   *定义每次滑动的距离spanX
                   *定义当前滑动的索引位置thisIndex，
                   */
                  function touchmove(event){

                      
                      if( event.targetTouches.length == 1 )
                      {
                          var touch = event.targetTouches[0];
                          var spanX = touch.pageX - pressX ,
                              windowWidth = $(".ones").width();
                          var $car_img = $(".ones"),
                              $this = $(this);
                          var thisIndex = $this.index(),
                              imgLen = $(".ones").length;
                          for(var i=0;i < imgLen;i++){
                              $car_img.eq(i).css("left",windowWidth*(i-thisIndex)+spanX);
                          }
                          
                      }
                  }

                  function touchend(event){
                      var $car_img = $(".ones"),
                          $this = $(this),
                          $carousel_icon = $(".carousel_icon"),
                          windowWidth = $(".ones").width();
                      var thisIndex = $this.index(),
                          imgLen = $(".ones").length;
                      var thisLeft = parseInt($(this).css("left"));
                      //向左滑动执行的方法
                      if(thisLeft < -5 && thisIndex < imgLen){
                          if(thisIndex == imgLen-1){
                              for(var i=0;i < imgLen;i++){
                                  $car_img.eq(i).animate({"left":windowWidth*(i-thisIndex)},300);
                                  
                              }
                          }
                          else{
                              for(var i=0;i < imgLen;i++){
                                  $car_img.eq(i).animate({"left":windowWidth*(i-(thisIndex+1))},300);
                                 
                              }
                          
                          }
                          
                      }
                      //向右滑动执行的方法
                      else if(thisLeft > 5 && thisIndex >= 0){
                          //当在第一个位置时
                          if( thisIndex == 0){
                              for(var i=0;i < imgLen;i++){
                                  $car_img.eq(i).animate({"left":windowWidth*(i-thisIndex)},300);
                              }
                          }
                          //不在第一个位置
                          else{
                              for(var i=0;i < imgLen;i++){
                                  $car_img.eq(i).animate({"left":windowWidth*(i-(thisIndex-1))},300);
                                
                              }
                              
                          }
                      }
                      //当滑动距离在大于-5px并且小于5px时，当前轮播图位置不变
                      else{
                          for(var i=0;i < imgLen;i++){
                              $car_img.eq(i).animate({"left":windowWidth*(i-thisIndex)},100);
                          }
                      }
                  }
                  })
}
})