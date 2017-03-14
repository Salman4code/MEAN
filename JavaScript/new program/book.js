var data={
  "Book1":{
    "name":"Computer Network",
    "topics":["protocol","security"]

  },
  "Book2":{
    "name":"Computer security",
    "topics":["cyber crimes","crptography"]
  },
  "Book3":{
    "name":"Digital forensic",
    "topics":["cyber crimes","spoofing"]
  },
  "Book4":
  {
    "name":"DataStructure",
    "topics":["linkedlist","stack"]
  },
  "Book5":
  {
    "name":"Java",
    "topics":["linkedlist","OOP"]
  }
}
// var text={
//   "ComputerNetwork":[
//     "network",
//     "protocol"
//
//   ],
//   "ComputerSecurity":[
//     "computer security",
//     "cyber crimes"
//   ],
//   "Digitalforensic":[
//     "digital forensic",
//     "cyber crimes"
//   ],
//   "DataStructure":
//   [
//     "DataStructure",
//     "linkedlist"
//   ],
//   "Java":
//   [
//     "Java",
//     "linkedlist"
//   ]
// }
class Book {
  constructor(name,topic) {
    this.name=name;
    this.topic=topic;
  }
  displayCN()
  {
    //console.log(this.name,this.topic);
    console.log(Object.keys(data.Book1).length);
      document.getElementById("CN").innerHTML="";
    for (var i = 0; i < Object.keys(data.Book1).length; i++) {
      var r=data.Book1.topics[i];
      console.log(r);
      var j=i;


      document.getElementById("CN").innerHTML+=++j+". "+r+"<br>";
    }
// console.log(data.Book2.name);
// console.log(data.Book3.name);

}
displayCS()
{
  console.log(Object.keys(data.Book2).length);
    document.getElementById("CS").innerHTML="";
  for (var i = 0; i < Object.keys(data.Book2).length; i++) {
    var r=data.Book2.topics[i];
    console.log(r);
    var j=i;


    document.getElementById("CS").innerHTML+=++j+". "+r+"<br>";
}
}
displayDF()
{
  console.log(Object.keys(data.Book3).length);
      document.getElementById("DF").innerHTML="";
  for (var i = 0; i < Object.keys(data.Book3).length; i++) {
    var r=data.Book3.topics[i];
    console.log(r);
    var j=i;
    document.getElementById("DF").innerHTML+=++j+". "+r+"<br>";
}
}

}
class topic extends Book {
  print()
  {
    console.log(this.name);
  }

}
function CN()
{
var cn= new topic();
//b.print();
cn.displayCN();
//console.log(text);
}
function CS()
{
  var cs=new topic();
  cs.displayCS();
}
function DF()
{
  var df= new topic();
  df.displayDF();
}
