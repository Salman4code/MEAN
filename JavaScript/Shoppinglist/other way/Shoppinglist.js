function fun(){
Array.prototype.push = function(item) {
    this[this.length] = item;
    return this;
};

Array.prototype.pop = function()
{
  var ret = this[this.length-1];
  this.splice(this.length, 1);
  return ret ;
};

var arr =new Array();
arr.push('my');
console.log(arr);
console.log(arr.pop());
}
// function push( item, quantity)
// {
// var mylist=[[],[]];
//
//  mylist[0][0]=document.getElementsByName('item').value;
// // mylist[1].name='quantity';
// console.log(mylist[0][0]);
// // console.log(mylist[1]);
//  //for (var i = 0; i < mylist.length; i++) {
// //mylist[i].name='item';
// //console.log(mylist[i]);
// //document.write(tmp);
// //}
//
// }
