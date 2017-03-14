function myfun(){
//  var str='Tim:20,Henry:30,Linda:35';
var str1 = document.getElementById('text').value
var rep=str1.replace(/:/g,",")
//var rep1=rep.replace(/./,",")
console.log(rep);
var a=rep.split(",");
console.log(a);
document.write(a);
// var arr = new Array();
// for (var i = 0; i < a.length; i++) {
// document.write(a[i]+"\t");
// }
// console.log(arr);
}
