$.ajax({
             type: "post",
             url: "http://47.94.140.92:8080/JDLot/lottype/alllist",
             data: {},
             dataType: "json",
             success: function(data){
                   data=data.datas;
                   console.log(data)
                   $('#caizhongjiekou').empty();  
                   var html="";
                   var arr=["deguoCar_pic.html","pic_pk10.html","pic_zoushi.html","guangDong_pic.html","pic_shishicai.html"];
                   $.each(data,function(i){
                      html+='<li><a href="'+arr[i]+'">'+data[i].lottery_full_name+'</a></li>'
                   })
                   $('#caizhongjiekou').append(html)
                 }

       })