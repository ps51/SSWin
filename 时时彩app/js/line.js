$(function(){
         $.ajax({
             type: "post",
             url: "http://47.94.140.92:8080/JDLot/type/jsks/alllist",
             data: {"PageNum":1,"PageSize":"20"},
             dataType: "json",
             success: function(data){

                     data=data.datas;
                     data=data.slice(0,30);
                console.log(data)
                    var tbody = "";
           var sum = "";
            head = "<tr><th class='t'>期号</th><th class='t'>奖号</th><th class='t'>和值</th><th class='t'>3/18</th><th class='t'>4/17</th><th class='t'>3/18</th><th class='t'>5/16</th><th class='t'>6/15</th><th class='t'>7/14</th><th class='t'>8/13</th><th class='t'>9/12</th><th class='t'>10/11</th></tr>";
            for (var i = 1; i < data.length; i++) {
                
                tbody += "<tr>";
                for (var j = 1; j < 13; j++) {
                    var aas = data[i].number;
                    aas=parseInt(aas.substring(0,1))+parseInt(aas.substring(1,2))+parseInt(aas.substring(2,3));
              
                    tbody += "<td ><span class='colors' id='T" + i + "_" + j + "'>"+data[i].number+"</span></td>";
                }
                tbody += "</tr>";
            }
            $("#zstable thead").html(head);
            $("#zstable tbody").html(tbody);
            // if(){
            //     $(".colors").text(sum)
            // }
            
            var ids = "";
            for (var i = 1; i < data.length; i++) {
                ids+= "T" + i + "_" + parseInt(4 + Math.random() *9) + ",";//获取的动态创建的点的坐标
            }
            ids = ids.substring(0, ids.length - 1);
            CreateLine(ids, "10%", "#ff6600", "canvasdiv", "red");  
                    
     }

  });
});
 function CreateLine(ids, w, c, div, bg) {
            var list = ids.split(",");
            for (var j = list.length - 1; j > 0; j--) {
                var tid = $("#" + list[j]);
                var fid = $("#" + list[j - 1]);
                var f_width = fid.outerWidth(true);
                var f_height = fid.outerHeight();
                var f_offset = fid.offset();
                var f_top = f_offset.top;
                var f_left = f_offset.left;
                var t_offset = tid.offset();
                var t_top = t_offset.top;
                var t_left = t_offset.left;
                var cvs_left = Math.min(f_left, t_left);
                var cvs_top = Math.min(f_top, t_top);
                tid.css("background", bg).css("color", "#fff");
                fid.css("background", bg).css("color", "#fff");
                var cvs = document.createElement("canvas");
                cvs.width = Math.abs(f_left - t_left) < w ? w : Math.abs(f_left - t_left);
                cvs.height = Math.abs(f_top - t_top);
                cvs.style.top = cvs_top + parseInt(f_height / 2) + "px";
                cvs.style.left = cvs_left + parseInt(f_width / 2) + "px";
                cvs.style.position = "absolute";
                var cxt = cvs.getContext("2d");
                cxt.save();
                cxt.strokeStyle = c;
                cxt.lineWidth = 2;
                cxt.lineJoin = "round";
                cxt.beginPath();
                cxt.moveTo(f_left - cvs_left, f_top - cvs_top);
                cxt.lineTo(t_left - cvs_left, t_top - cvs_top);
                cxt.closePath();
                cxt.stroke();
                cxt.restore();
                $("#" + div).append(cvs);
            }
        } 