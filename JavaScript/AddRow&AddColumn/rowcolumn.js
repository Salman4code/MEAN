var table,r,c,t,rs;
function addrow()
{

//   var table=document.getElementById('mytable');
//   var row=table.insertRow(0);
//   var cell1=row.insertCell(0);
//
// cell1.innerHTML="New Row";
 table=document.getElementById("mytable");
 r=document.createElement("tr");
table.appendChild(r);
 rs=document.createTextNode("New Row");
r.appendChild(rs);

}
function addcolumn()
{

  c=document.createElement("td");
  t=document.createTextNode("New Column");
  c.appendChild(t);

  r.appendChild(c);
// document.getElementById('mytr').appendChild(c);
//   var table=document.getElementById('mytable');
//   var col=table.inserColumn(0);
//   var col1=col.insertCell
}
