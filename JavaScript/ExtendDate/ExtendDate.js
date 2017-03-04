var d=new Date();
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month=["January","February","March","April","June","July","August","September","October","November","December"];
function myfun(date,month,year)
{
  this.date=date;
  this.month=month;
  this.year=year;

}

document.write("Current Date :: "+d);
var dat=new myfun(d.getDate(),d.getMonth(),d.getFullYear());
dat.nextday=function(){

 d.setDate(this.date+1);
//return day[d.getDay()];
document.write("<br><br> Next Day::"+day[d.getDay()]);
document.write("<br><br> Next Date::"+day[d.getDay()]+"--"+d.getDate()+","+month[d.getMonth()]+"--"+d.getFullYear());
//return dt;
return this;
};
window.onload =dat.nextday();
//document.getElementById("id").value= myfun.getDate();
