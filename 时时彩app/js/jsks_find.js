$(function(){
         $.ajax({
             type: "post",
             url: "http://47.94.140.92:8080/JDLot/type/jsks/list",
             data: {"PageNum":1,"PageSize":"10"},
             dataType: "json",
             success: function(data){
             	     data=data.datas;
             	     data=data.slice(0,100);
             	console.log(data)
                         $('#dingwei_jihua').empty();   //清空resText里面的所有内容
                         var html = '<li>'+
										  '<table>'+
										  '<tr>'+
										  '<th class="th_data1">期号</th>'+
										  '<th class="th_data1">序号</th>'+
										  '<th class="th_data2">任选独胆</th>'+
										  '<th class="th_data3 lasts">回顾</th>'+
										  '</tr>'; 
                         $.each(data, function(i){
                         	 
                                   html+= '<tr>'+
										  '<td class="th_data1">'+data[i].number+'</td>'+
										  '<td class="th_data1">0822-'+(i> 9 ? i : "0"+i)+'</td>'+
										  '<td class="th_data2">独胆:'+i+'</td>'+
										  '<td class="th_data3 lasts">回顾</td>'+    //回顾信息判断，如果匹配三期中的数据就返回“对”，否则“error”
										  '</tr>'
                         });
                            html=html+'</table></li>';

                       $('#dingwei_jihua').html(html);//将数据放在ul中

                       $("#yiqiding").click(function(){//点击一期定位胆时显示

                       		$('#dingwei_jihua').html(html);
                       })
                       $("#yiqiding1").click(function(){//点击二期定位胆时显示
                       	  $('#dingwei_jihua').empty();   //清空resText里面的所有内容
                         var html = '<li>'+
										  '<table>'+
										  '<tr>'+
										  '<th class="th_data1">期号</th>'+
										  '<th class="th_data1">序号</th>'+
										  '<th class="th_data2">任选独胆</th>'+
										  '<th class="th_data3 lasts">回顾</th>'+
										  '</tr>'; 
                         $.each(data, function(i){
                                   html+= '<tr>'+
										  '<td class="th_data1">期号1</td>'+
										  '<td class="th_data1">序号2</td>'+
										  '<td class="th_data2">和尾3</td>'+
										  '<td class="th_data3 lasts">回顾4</td>'+
										  '</tr>'
                         });
                            html=html+'</table></li>';
                       		$('#dingwei_jihua').html(html);
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
         });
});