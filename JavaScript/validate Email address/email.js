// function readTextFile(callback)
// {
//   var rawFile = new XMLHttpRequest();
//   //file="/home/bridgeit/MEAN/JavaScript/linkedlist/abc.txt";
//  rawFile.open("GET","email.txt", true);
//  rawFile.onreadystatechange = function ()
//   {
//       if(rawFile.readyState === 4)
//       {
//           if(rawFile.status === 200 || rawFile.status == 0)
//           {
//             var  allText = rawFile.responseText;
//             //   alert(allText);
//             //if(callback)
//             callback(allText);
//
//           }
//       }
// };
//    rawFile.send();
//
//
// }
//
// window.onload=function myfun1()
// {
//   readTextFile(function(data)
//   {
//     console.log(data);
//   });
// }
function validateEmail(email) {
  document.getElementById("full").style.display = 'block';

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     re.test(email);
    console.log(email);
    if(re.test(email))
    {
      document.getElementById("result").innerHTML=email+"\t is valid email";
    }
    else {
      document.getElementById("result").innerHTML=email+"\t isInvalid email";
    }
}
function myfun()
{

$.get("email.txt",function(data)
{
  var str="";
  data=data.replace(/\r?\n|\r/,'');
  console.log(data);
  var f=data.split(",");
  console.log(f);
var str="";
document.getElementById("show").innerHTML="";
  // for (var i = 0; i < f.length; i++) {
  //   var an=document.createElement('a');
  //   var r=f[i];
  //   an.textContent=r;
  //   //an.setAttribute("value",r);
  //   an.setAttribute("href","r");
  //   var p=document.createElement('p');
  //
  //   p.appendChild(an);
  //   document.getElementById("get").appendChild(p);
  // }
  for (var i = 0; i < f.length; i++) {
    var index=i;
    // if(validateEmail(f[i]))
    // {
      // console.log(f[i]);
      // str+=f[i];

      var an=document.createElement('a');
      var r=f[i];
      an.textContent=(++index)+". "+r;
      //an.setAttribute("value",r);
      an.setAttribute("href",'javascript:validateEmail("'+r+'")');
      var p=document.createElement('p');

      p.appendChild(an);
      document.getElementById("show").appendChild(p);
  //  }
  }
  // var a=validateEmail();
  // console.log(a);
//document.getElementById("show").innerHTML=str;
});

}
$(document).ready(function(){
 $("#hide").click(function(){
  $("p").hide();
});
});
$(document).ready(function(){
 $("#close_button").click(function(){
  $("#full").fadeOut();
});
});
