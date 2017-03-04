// function fun(){
// Array.prototype.push = function(item) {
//     this[this.length] = item;
//     return this;
// };
//
// Array.prototype.pop = function()
// {
//   var ret = this[this.length-1];
//   this.splice(this.length, 1);
//   return ret ;
// };
//
// var arr =new Array();
// arr.push('my');
// for (var i = 0; i < arr.length; i++) {
//
// document.write(arr[i]);
// }
// console.log(arr);
// console.log(arr.pop());
// }

// function myfun(){
// var Mainarray=new Array();
// var index=0;
// Mainarray.Push("I");
// Mainarray.Pop();
// Mainarray.Pop();
//
//
// // Mainarray.prototype.Push=function (value){
//    function Push(value){
//     Mainarray[index]=value;
//     index++;
//   }
//   //Mainarray.prototype.Pop=function(){
//  function Pop(){
//     if(index>0){
//       index--;
//       return Mainarray[index];
//     }
//      else{
//         console.log("Array is Empty");
//       }
//   }
// }
function myfun()
{
var f = [];
var ins=[["sk"],["mk"]];
var k=0;
for (var i = 0; i < 2; i++) {
  f[i] = [];
  for (var j = 0; j < 2; j++) {
    f[i][j]=ins[k];
    k++;
  }
}
console.log(f);
}
