
$(function () {

  var apiUrl = "https://config-rkagiccjed.cn-hangzhou.fcapp.run";
  var down_url = "https://liepin01.lanzoue.com/s/lp";
  var update_url = "http://118.178.121.58:8000/1.0.25.zip";
  var video_url = "";
  var video_url_1_1 = "assets/img/pdd/pdd_1_1.mp4";
  var video_url_2_1 = "assets/img/pdd/pdd_2_1.mp4";
  var video_url_3_1 = "assets/img/pdd/pdd_3_1.mp4";


  $("#down_url").attr("href", down_url);
  $("#video_url_1_1").attr("href", video_url_1_1);
  $("#video_url_2_1").attr("href", video_url_2_1);
  $("#video_url_3_1").attr("href", video_url_3_1);

  // $.ajax({
  //   url: apiUrl,
  //   async: true,
  //   data: "key=word&jsoncallback=?",
  //   dataType: "jsonp",
  //   type: "get",
  //   success: function (data) {
  //     //console.log(data);
  //   },
  //   error: function (e) {
  //     //console.log(e);
  //   }
  // });


});