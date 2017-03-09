var alltext;
 function readTextFile()
{
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
            }
        }
  };
     rawFile.send(null);

// function linkedlist()
// {
//   start=null;
//   end=null;
//   size=0;
// }
function all()
{
var linkedlist=function(){
  this.start=null;
  this.end=null;
  this.size=0;
  function node(value)
  {
    this.value=value;
    this.next=null;
  }
var push=function(data)
{
  var ptr=new node(data);
this.size++;
  if(this.start==null)
  {
    this.start=ptr;
    return this.start;
  }
  else {
    // if(this.end==null)
    // {
    //   var ptr=new node(data);
      this.end.next=ptr;
      return this.end;
    }
  };

}

// function pop()
// {
//   node ptr=start;
//   ptr=ptr.next;
// }
};
var list =new linkedlist();
list.push('hi');
console.log(allText);
}
