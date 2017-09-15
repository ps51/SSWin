$(function(){
   var plan="A";
   data_plan();
       function data_plan() {
                $.ajax({
                      type: "post",
                      url: "http://47.94.140.92:8080/JDLot/lot/plan/list",
                      data: {"child_name":plan,"period_count":"1","lot_type":"0","plan_code":"00","lottery_name":"1"},//计划
                      //child_name计划ABC   period_count计划期数    lot_type 大彩种   plan_code  定位胆
                      contentType: "application/json",
                      dataType: "json",
                      success: function(data){
                        var counts=["1","2","3"];
                       // console.log(data)
                            data=data.datas;
                            data=data.slice(0,100);     
                        // console.log(data)
                                  $('#dingwei_jihua').empty();   //清空resText里面的所有内容
                                  var html = '<li>'+
                                             '<table>'+
                                             '<tr>'+
                                             '<th class="th_data1">期号</th>'+
                                             '<th class="th_data1">序号</th>'+
                                             '<th class="th_data2">计划</th>'+
                                             '<th class="th_data3 lasts">回顾</th>'+
                                             '</tr>'; 
                                             var data_r="";
                                             var data_w="";
                                  $.each(data, function(i){
                                    
                                            html+= '<tr>'+
                                             '<td class="th_data1">'+data[i].period_start+'-'+data[i].period_end+'</td>'+
                                             '<td class="th_data1">'+data[i].index_number+'</td>'+
                                             '<td class="th_data2">'+data[i].code_num+'</td>'+
                                             '<td class="th_data3 lasts lasts_success" id="lasts_success">'+( data[i].result==1 ? "✔":"✘")+'</td>'+    //回顾信息判断，如果匹配三期中的数据就返回“对”，否则“error”
                                             '</tr>'
                                               text1 = parseInt(i/90)+ "%";//底部展示
                                               text2 = parseInt((i/20))+ "%";
                                                if (data[i].result == 1) {
                                                   data_r++;
                                                 
                                              } 
                                              
                                  });for (var i = 0; i < 20; i++) {
                                                if (data[i].result == 1) {
                                                    data_w++;
                                                } 
                                              }
                                     html=html+'</table></li>';
         
                                $('#dingwei_jihua').html(html);//将数据放在ul中
                                
                                $(".ccs1").text(2*data_r+"%");
                                $(".ccs2").text(5*data_w+"%");
                              
                             $("#yiqiding").click(function(){//点击一期定位胆时显示
                             
                                     $('#dingwei_jihua').html(html);
                                   });
                           
                                $("#yiqiding1").click(function(){//点击二期定位胆时显示
                                    $('#dingwei_jihua').empty();   //清空resText里面的所有内容
                                 
                                })
         
                                $("#yiqiding2").click(function(){//点击三期定位胆时显示
                                   $('#dingwei_jihua').empty();   //清空resText里面的所有内容
                                  var html = '<li>'+
                                             '<table>'+
                                             '<tr>'+
                                             '<th class="th_data1">期号</th>'+
                                             '<th class="th_data1">序号</th>'+
                                             '<th class="th_data2">和尾</th>'+
                                             '<th class="th_data3 lasts">回顾</th>'+
                                             '</tr>'; 
                                  $.each(data, function(i){
                                            html+= '<tr>'+
                                             '<td class="th_data1">期号2</td>'+
                                             '<td class="th_data1">序号2</td>'+
                                             '<td class="th_data2">和尾2</td>'+
                                             '<td class="th_data3 lasts">回顾2</td>'+
                                             '</tr>'
                                  });
                                     html=html+'</table></li>';
                                    $('#dingwei_jihua').html(html);
                                })
                               }
         
                  })
;}
var arr=["A","B","C"];

    $(".tabClick li").each(function(i){
          $(this).click(function(){
              plan=arr[i]
              // alert(plan);
              data_plan()
          })
    })
});