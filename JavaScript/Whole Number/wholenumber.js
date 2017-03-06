window.onload=function myfun()
{
  for (var i = 0; i < 20; i++) {

  var a=Math.floor((Math.random() * 20) + 1);
  console.log(a);
  document.write("Random Number\t"+i+"\t::"+"\t"+a+"<br>");

  //document.getElementById('print').innerHTML=a;
}
}
