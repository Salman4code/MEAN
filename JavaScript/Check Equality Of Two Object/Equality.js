function Input(firstname,lastname,age,country)
{
  this.firstname=firstname;
  this.lastname=lastname;
  this.age=age;
  this.country=country;
}
var userinput,userinput1;
function userOne(){
   var firstname=document.getElementById('firstName').value;
   var lastname=document.getElementById('lastName').value;
   var age=document.getElementById('age').value;
   var country=document.getElementById('country').value;

 userinput = new Input(firstname,lastname,age,country);
console.log(userinput);
return userinput;
}
function userTwo()
{
  firstname=document.getElementById('firstName').value;
  lastname=document.getElementById('lastName').value;
  age=Number.parseInt(document.getElementById('age').value);
  country=document.getElementById('country').value;
 userinput1=new Input(firstname,lastname,age,country);
console.log(userinput1);
return userinput1;
}
function finalResult() {
//  if(userinput.firstname===userinput1.firstname && userinput.lastname===userinput1.lastname && userinput.age===userinput1.age && userinput.country===userinput1.country)
if(userinput===userinput1)
{
  return true;
}
else {

    return false;
}
}
function display()
{
  var eq1=finalResult();
  if(eq1)
  {
    document.write("Object Are Equal");
  }
  else {
    document.write("Object are not equal");
  }
}
//   console.log(userinput.firstname==userinput1.firstname);
//   console.log(userinput.lastname==userinput1.lastname)
//   console.log(userinput.age==userinput1.age);
//   console.log(userinput.country==userinput1.country);
// }
/*function myfun()
{
  var eq=isEqual();
  if(eq)
  {
    document.write("Object are Equal");
  }
  else {
    document.write("Object are not Equal");
  }
}
function isEqual()
{
  var in1=userOne();
  var in2=userTwo();
  // console.log(in1);
  // console.log(in2);
  var a=Object.getOwnPropertyNames(in1);
  var b=Object.getOwnPropertyNames(in2);
  console.log(a);
  console.log(b);
  if(a.length!=b.length)
  {
    return false;
  }
  for (var i = 0; i < a.length; i++) {
    var pname=a[i];
    if(a[pname]!==b[pname])
    {
      return false;
    }
  }
  return true;
}*/
