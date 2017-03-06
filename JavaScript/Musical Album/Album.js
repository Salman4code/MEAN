function myfun(){
var mydata=JSON.parse(JSON.stringify(data));
console.log(mydata);
// alert(mydata.Id[0].artist);
// for (var i = 0; i < mydata.length; i++) {
//   var p=mydata[i];
//   console.log(p.id);
// }
}
function UpdateR(Id,prop,value)
{
  //var Id=id.options[id.selectedIndex].value;
  var mydata=JSON.parse(JSON.stringify(data));
  console.log(mydata);
  if(value!=="")
  {
    if(prop==="track")
    {
      // mydata[Id][prop]=[value];
      if (!mydata[Id].hasOwnProperty(prop)) {
        mydata[Id].track=[];
      }
      mydata[Id][prop].push(value);
    //mydata[Id][prop]=[value];
    }
     else
     {
      mydata[Id][prop]=[value];
    }
  }
  else if (value==="") {
    delete mydata[Id][prop];
  }
  return console.log(mydata);
  //  return document.write(mydata.toString());
}
//UpdateR(2548,"track","Addicted to Love");
