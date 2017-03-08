window.onload=function myfun()
{
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
    if(current===value)
    {
      return true;
    }
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
  var current=this.head;
  while(current.data!==null)
  {
    prev =current;
    current=current.next;
  }
  prev.next=current.next;
};
linkedlist.prototype.display = function () {
  if(isEmpty)
  {
    //document.write("linkedlist is Empty");
    console.log("linkedlist is Empty");
    return;
  }
  var current = this.head;

};
var list = new linkedlist();
var str=readTextFile();
//var str1=str.toString();
console.log(str);
list.insertAtStart(10);
list.insertAtEnd(5);
list.remove(5);
console.log(list);

function readTextFile()
{
  var allText,str1;
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
                alert(allText);
                 str1=allText.toString();
                console.log(str1);

           }
       }
 };
    rawFile.send(str1);
}
}
