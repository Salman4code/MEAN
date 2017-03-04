var mylist=[["Chocolate",1]];

function push()
{
  var i=document.getElementById('item').value;
  var q=document.getElementById("quantity").value;
  console.log(i);
  console.log(q);
  mylist.push([i,q]);
  document.getElementById('print').innerHTML=mylist;
}
function pop()
{
  console.log(mylist.pop());
console.log(mylist);
  document.getElementById('print').innerHTML= mylist;
}
function unshift() {
  var it=document.getElementById('item1').value;
  var qt=document.getElementById('quantity1').value;
  console.log(mylist.unshift([it,qt]));
  document.getElementById('print').innerHTML= mylist;
}
function shift()
{
  console.log(mylist.shift());
  document.getElementById('print').innerHTML=mylist;
}
