var d=new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function myfun(date,month,year)
{
  this.date=date;
  this.month=month;
  this.year=year;

}


var dat=new myfun(d.getDate(),d.getMonth(),d.getFullYear());
dat.nextdate=function(){
  //d.setDay(days[d.getday()+1]);
  d.setDate(this.date+1);
//return day[d.getDay()];
document.write(days[d.getDay()]);
};
window.onload =dat.nextdate();
//document.getElementById("id").value= myfun.getDate();
