function myfun(){
var newURL = window.location.href;
var host=window.location.host;
var protocol=window.location.protocol;
var path=window.location.pathname;
var url=window.location.search;
document.write("href    ::-->"+newURL+"<br>");
document.write("host    ::-->"+host+"<br>");
document.write("protocol::-->"+protocol+"<br>");
document.write("path    ::-->"+path+"<br>");
document.write("search  ::-->"+url);
// document.getElementById('url').innerHTML=newURL;
// document.getElementById('path').innerHTML=path;
// document.getElementById('host').innerHTML=newURL1;
// document.getElementById('protocol').innerHTML=newURL2

}



// document.write(newURL);
// doument.write(newURL1);
// for(var a in newURL)
// {
//   console.log(newURL[a]);
//   var tmp=newURL[a];
// document.getElementById('url').value=tmp;
// }
