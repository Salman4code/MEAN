function a(){
var calculate=function(){

var first=function(i){
  this.i=i;
  return this;
};
var second=function(j){
  this.j=j;
  return this;
};
var sum=function(){
  var res=this.i+this.j;
  console.log(res);
  //document.write(res);
  return res;
};
return {first:first,second:second,sum:sum};
};

  var num1=document.getElementById('first').value;
 var num2=document.getElementById('Second').value;
var x= calculate().first(Number.parseInt(num1)).second(Number.parseInt(num2)).sum();
// console.log(i);
// console.log(j);
document.getElementById('result').value=x;
//document.write("Addition Of Number is "+x);
}
