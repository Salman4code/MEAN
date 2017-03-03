
function getlinks()
{
  var l= document.links.length;
//  document.getElementById('demo').innerHTML=l;
  for (var i=0;i<l;i++) {
    document.getElementById("demo").innerHTML+="Link: " +document.links[i].href+"<br>" ;
// i=0;
//   do {
//
//     var y=document.links[i].href;
//     document.write(y);
//     i++;
//
//   } while (x<3);

 //       var y=document.links[i].href;
 //    var y=document.links.item[i].href;
 // console.log(y);
      //document.getElementById('demo').innerHTML =y;

    						//" is linked to: " + document.links[i].href+"<br/>";
   }
 }
   function totallinks()
   {
     var total=document.links.length;
     document.getElementById("next").innerHTML="Number of links\t"+total;
   }
