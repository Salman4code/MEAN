function myfun(){
var newURL = window.location.href;
var newURL1=window.location.host;
var newURL2=window.location.protocol;
var path=window.location.pathname;

document.getElementById('url').innerHTML=newURL;
document.getElementById('url').innerHTML=path;

}



// document.write(newURL);
// doument.write(newURL1);
// for(var a in newURL)
// {
//   console.log(newURL[a]);
//   var tmp=newURL[a];
// document.getElementById('url').value=tmp;
// }
