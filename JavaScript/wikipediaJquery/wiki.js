$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Sachin_Tendulkar&callback=?",
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
    success: function(data, textStatus, jqXHR) {
      // console.log(data);
      var markup = data.parse.text["*"];
      var data = $('<div></div>').html(markup);
      // console.log(markup);
      //$('#article').append(markup);
      //$('a').remove();
      data.find('a').each(function(){
        $(this).replaceWith($(this).html())
      });
      data.find('sup').remove();
        var d=$(data).find('div');
        console.log(d);
      var infoArray =$(data).find('p');
      //var dom ='';
      console.log(infoArray);
      // $('#p1').html(infoArray);
      // for (var i=0;i<infoArray.length;i++) {
      //   // $('#p'+(i+1)).html(infoArray[i]);
      // }
      $('#p1').html(infoArray[0]);
      $('#p2').html(infoArray[1]);
      $('#p3').html(infoArray[2]);
      $('#p4').html(infoArray[3]);
       $('#t').html($(data).find('table'));
    },
    error: function(errorMessage) {}

  });
});
