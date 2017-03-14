var data={
  "ComputerNetwork":{
    "introduction":"variables",
    "subtopics":"protocol"

  },
  "ComputerSecurity":{
    "introduction":"computer security",
    "sub-topics":"cyber crimes"
  },
  "Digitalforensic":{
    "introduction":"digital forensic",
    "sub-topics":"cyber crimes"
  },
  "DataStructure":
  {
    "introduction":"DataStructure",
    "sub-topics":"linkedlist"
  },
  "Java":
  {
    "introduction":"Java",
    "sub-topics":"linkedlist"
  }
};

var ClassA=function()
{
  this.name="class A";
}
ClassA.prototype.print = function () {
console.log(this.name);
};
var a=new ClassA();
window.onload=function myfun() {
  a.print();

}
var inheritsfrom=function(child,parent)
{
  child.prototype=Object.create(parent.prototype);
};
var ClassB=function()
{
  this.name="Class B";
  this.surname="I m the child";
}
inheritsfrom(ClassA,ClassB)
var b= new ClassB();
ClassB.prototype.print=function()
{
  ClassA.prototype.print.call(this);
    console.log(this.surname);
}
window.onload=function myfun1(){
b.print();
}
