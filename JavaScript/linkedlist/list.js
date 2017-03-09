function myfun()
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
  var curr=this.head;
  while(curr.data!==null)
  {
    prev =curr;
    current=curr.next;
  }
  prev.next=curr.next;
};
linkedlist.prototype.display = function () {
  if(this.head===null)
  {
    //document.write("linkedlist is Empty");
    console.log("linkedlist is Empty");
    return;
  }
  var current = this.head;
  console.log(current.data+"->");
  current=current.next;
  while(current!==null)
  {
    console.log(current.data+"->");
    current=current.next;
  }
//  console.log(current.data);

};
var list = new linkedlist();
readTextFile().then(function (data) {
  console.log(data);//success
}).catch(function (err) {
 console.error(err);
  //error
})
//var str1=str.toString();

list.insertAtStart(10);
list.insertAtEnd(5);
//list.remove(5);
list.display();
//console.log(list);
}
var str1,allText;
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
               alert(allText);
                str1=allText.toString();
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
function cfunction(rawFile)
{
document.getElementById('demo').innerHTML=rawFile.responseText;
}
