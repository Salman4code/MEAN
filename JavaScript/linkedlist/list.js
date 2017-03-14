
function linkedlist()
{
  this.head=null;
  // var sayhello=function ()
  // {
  //  console.log('hi');
  // }
}
linkedlist.prototype.isEmpty=function()
{

  return this.head === null;
};

linkedlist.prototype.size = function () {
  var current = this.head;
  var count=0;
  while(current!==null)
  {
    count++;
    current=current.next;
  }
  return count;
};

linkedlist.prototype.insertAtStart = function (value) {
  var newNode={
    data:value,
    next:this.head
  };
this.head=newNode;
};


linkedlist.prototype.insertAtEnd= function (value)
{
var newNode={
  data:value,
  next:null
};
if(this.head==null)
{
  this.head= newNode;
  return;
}
var current= this.head;

while(current.next!==null)
{
  current=current.next;
}
current.next=newNode;
};
linkedlist.prototype.contain = function (value) {
  var current =this.head;

  while(current!==null)
  {
    if(current.data===value)
    {
      return true;
    }
    current=current.next;
  }
  return false;
};
linkedlist.prototype.remove = function (value) {
  if(!this.contain(value))
  {

    return;
  }
  if(this.head.data===value)
  {
    this.head=this.head.next;
    return;
  }
  var prev=null;
  var curr=this.head;
  while(curr.data!==value)
  {
    prev =curr;
    curr=curr.next;
  }
  prev.next=curr.next;
};
linkedlist.prototype.pop = function () {
  // var current=this.head;
  if(this.head.data==null)
  {
    console.log("linkedlist is Empty");
    return false;
  }
  this.head=this.head.next;
return true;
};
linkedlist.prototype.display = function () {
  if(this.head===null)
  {
    //document.write("linkedlist is Empty");
    console.log("linkedlist is Empty");
    alert("linkedlist is Empty");
  }
  else {


  var current = this.head;
  console.log(current.data);
  var s=this.size();
  console.log(s);
  var d=document.getElementById("print");
  d.innerHTML="";

  while(current!==null)
  {
    console.log(current.data);

    var p=document.createElement("p");
    var c=document.createTextNode(current.data);
    p.appendChild(c);
    d.appendChild(p);
    current=current.next;
  }
}
};
linkedlist.prototype.print=function()
{
  var op="";
  var current=this.head;
  while (current!==null) {
     op+=current.data+"<br>";
     current=current.next;
  }
//  op+=this.data;
  document.getElementById('pr').innerHTML=op;
  console.log(op);
  return op;
};
var list = new linkedlist();
var str,str1,allText;
function loaddatafromfile()
{
readTextFile().then(function (data) {
  data=data.replace(/\r?\n|\r/,'');//success

  str =data.split(" ");
  //document.getElementById('demo').innerHTML=str;
  //var str1=str.toString();
for (var i = 0; i < str.length; i++) {
var temp =str[i];
list.insertAtEnd(temp);
}

  //list.display();
  list.print();
  list.isEmpty();
  console.log(list.isEmpty());
  console.log(list);


}).catch(function (err) {
 console.error(err);
 alert("File Not Found")
  //show error
});
}
 function pop()
{
 list.pop();
 list.print();
// list.display();
 }
function push()
{
    var value=document.getElementById('input').value;
    //var value =prompt("Enter String for search")
try {
  if (value=="") throw "please Enter value"
  list.insertAtEnd(value);
  // list.display();
  list.print();

} catch (e) {
  alert("please Enter string");

} }
function search() {
  var value=document.getElementById('input').value;
//  var value=prompt("Enter String for search")
  if(list.contain(value))
  {
    console.log("String Found");
    document.getElementById('pr').innerHTML="String Found";
    //alert("String Found");
  }
  else {
    console.log("String Not Found");
    document.getElementById('pr').innerHTML="String Not Found";
  }
}
function remove()
{
  var value=document.getElementById('input').value;
  list.remove(value);
  //list.display();
  list.print();
}
function display()
{
  list.print();
//  list.display();

}
function readTextFile(cfunction)
{
return new Promise(function(resolve, reject) {
  var rawFile = new XMLHttpRequest();
  //file="/home/bridgeit/MEAN/JavaScript/linkedlist/abc.txt";
 rawFile.open("GET","abc.txt", true);
 rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              allText = rawFile.responseText;
            //   alert(allText);
                str1=allText;
               resolve(str1);
               return str1;
          }else {
            reject("error");
          }
      }
};
   rawFile.send();
});

}
