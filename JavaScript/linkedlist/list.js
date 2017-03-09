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
linkedlist.prototype.display = function () {
  if(this.head===null)
  {
    //document.write("linkedlist is Empty");
    console.log("linkedlist is Empty");
    return;
  }
  var current = this.head;
  console.log(current.data+"->");
  document.getElementById('demo').innerHTML=current.data;
  current=current.next;
  while(current!==null)
  {
    console.log(current.data+"->");
    var d=document.getElementById('print');
    var p=document.createElement("p");
    var c=document.createTextNode(current.data);
    p.appendChild(c)
    d.appendChild(p);
    //document.getElementById('demo').innerHTML=current.data+"->";
    current=current.next;
  }
//  console.log(current.data);

};
var list = new linkedlist();
var str,str1,allText;;
readTextFile().then(function (data) {
  console.log(data);//success

  str =data.split(" ");
  document.getElementById('demo').innerHTML=str;
  //var str1=str.toString();
for (var i = 0; i < str.length; i++) {
var temp =str[i];
list.insertAtEnd(temp);
}

  //list.insertAtEnd('b');
  //console.log(list.remove('b'));
  list.display();
  list.isEmpty();
  console.log(list.isEmpty());
  //console.log(list);


}).catch(function (err) {
 console.error(err);
  //error
})
// function isEmpty()
// {
// list.isEmpty();
// }
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
               alert(allText);
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
