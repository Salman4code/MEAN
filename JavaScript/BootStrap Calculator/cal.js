$(document).ready(function()
  {
var equ;
var txt=equ
var str="";
    $("button").click(function()
      {
     txt=  $(this).attr("value");
      str+=""+txt;
    //  document.getElementById('demo').innerHTML=txt;
      console.log(str);
          $("#text1").val(str);
          // var equ=eval(str);
          //  $("#eq").val(equ);
      }
    );
$("#eq").click(function()
{
   equ=eval(str);
   str=equ;
  console.log(equ);
  $("#text1").val(equ);
});


$("#clr").click(function()
{
   str="";
  console.log(str);
  $("#text1").val(str);
});

$("#z").click(function()
{
  str=0;
  console.log(str);
  $("#text1").val(str);
});
}
);

// }
