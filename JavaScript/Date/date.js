var s,e,start,end,sdate,sday,smonth,syear,edate,emonth,eyear,eday,dayname,monthname;
function myfun() {
   s = document.getElementById('start').value;
   e = document.getElementById('end').value;
   start = new Date(s);
   end = new Date(e);
   dayname = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   monthname = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
  //document.getElementById('display').innerHTML = start;
   sdate = start.getDate();
   sday = dayname[start.getDay()];
   smonth = monthname[start.getMonth()];
   syear = start.getFullYear()
   edate = end.getDate();
   eday = dayname[end.getDay()];
   emonth = monthname[end.getMonth()];
   eyear = end.getFullYear();
   if(syear===eyear && smonth===emonth)
   {
   var d=first();
   var d1=second();
   document.getElementById('display').innerHTML=emonth+"\t"+d+","+d1;
   console.log(d);
   console.log(d1);
 }
   else if(syear!==eyear) {
     var d=first();
     var d1=second();
     document.getElementById('display').innerHTML=smonth+"\t"+d+"\t"+syear+","+emonth+"\t"+d1+"\t"+eyear;
     console.log(d+syear);
     console.log(d1+eyear);
    //  console.log(sdate+","+smonth+","+syear);
    //  console.log(edate+","+emonth+","+eyear);
   }
   else if(syear==eyear) {
     var d=first();
     var d1=second();
     document.getElementById('display').innerHTML=smonth+"\t"+d+","+emonth+"\t"+d1;
   }
}
function first()
{
    if(sdate==1 || sdate==21  || sdate==31)
    {
      //var s=smonth+" "+sdate+"st";
      var s=sdate+"st";
      document.getElementById('display').innerHTML=smonth+" "+sdate+"st";
      return s;
    }
    else if (sdate==2 || sdate==22) {
    //  var s=smonth+" "+sdate+"nd";
      var s=sdate+"nd";
      document.getElementById('display').innerHTML=smonth+" "+sdate+"nd";
      return s;
    }
    else if (sdate==3 || sdate==23) {
      //var s=smonth+" "+sdate+"rd";
      var s=sdate+"rd";
      document.getElementById('display').innerHTML=smonth+" "+sdate+"rd";
      return s;
    }
    else {
      //var s=smonth+" "+sdate+"th";
      var s=sdate+"th";
      document.getElementById('display').innerHTML=smonth+" "+sdate+"th";
      return s;
    }
  }


function second()
{
  if(edate==1 || edate==21  || edate==31)
  {
    // var e=emonth+" "+edate+"st";
    var e=edate+"st";
    document.getElementById('display').innerHTML=emonth+" "+edate+"st";
    return e;
  }
  else if (edate==2 || edate==22) {
    //var e=emonth+" "+edate+"nd";
    var e=edate+"nd";
    document.getElementById('display').innerHTML=emonth+" "+edate+"nd";
    return e;
  }
  else if (edate==3 || edate==23) {
    // var e=emonth+" "+edate+"rd";
    var e=edate+"rd";
    document.getElementById('display').innerHTML=emonth+" "+edate+"rd";
    return e;
  }
  else {
    //var e=emonth+" "+edate+"th,"+edate+"th";
    var e=edate+"th";
    document.getElementById('display').innerHTML=emonth+" "+sdate+"th";
    return e;
  }

}
