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
//             if(callback)
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
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function myfun()
{
$.get("email.txt",function(data)
{
  console.log(data);
  //document.write(data)
  var str="";
  data=data.replace(/\r?\n|\r/,'');
  console.log(data);
  var f=data.split(",");
  console.log(f);
  for (var i = 0; i < f.length; i++) {

    if(validateEmail(f[i]))
    {
      console.log(f[i]);
    }
  }
  //document.write(f);
});
}
