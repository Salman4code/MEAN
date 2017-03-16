function vehicle()
{
  this.maxSpeed;
  this.type;
  this.displacement;
}
vehicle.prototype.set = function (maxSpeed,type,displacement) {
this.maxSpeed=maxSpeed;
this.type=type;
this.displacement=displacement;
};
bike.prototype= new vehicle();
function bike()
{
    bike.prototype.getSpeed=function()
  {
   return b.maxSpeed;
 }
}
 //bike object inherit the property of vehicle
 var b= new bike();

function myfun() {
//var b= new bike();
var m=document.getElementById("spd").value;
var t=document.getElementById("ty").value;
var d=document.getElementById("disp").value;
try {
  if(m=="" || t=="" || d=="") throw "please enter"
b.set(m,t,d);
document.getElementById('result').innerHTML="Object Created";
} catch (e) {
alert("Please Enter All value");
}
//console.log(b.getSpeed(gs));
}
function getspeed()
{
  // var gs=document.getElementById("gs").value;
  //try{
  // if(gs=="") throw "Please enter value"
  //bike.prototype= new vehicle();
  //var b1= new bike();

var rs=b.getSpeed();
console.log(b.getSpeed());
var p=document.createElement("p");
var c=document.createTextNode("Speed of vehicle\t"+rs);
// p.textContent=c;
p.appendChild(c);
document.getElementById("demo").appendChild(p);
//}
// catch(e)
// {
//   alert("Enter value");
//  document.getElementById("demo").innerHTML;
//}
}
