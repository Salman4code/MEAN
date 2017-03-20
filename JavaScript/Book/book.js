var data={
  "Book1":
  {
    "name":"Computer Network",
    "topics":["protocol","security","spoofing"]

  },
  "Book2":{
    "name":"Computer security",
    "topics":["cyber crimes","protocol"]
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
    console.log(this.name,this.topic);
    console.log(Object.keys(data.Book1.topics).length);
      //document.getElementById("CN").innerHTML="";
     document.getElementById("get").innerHTML="";
    for (var i = 0; i < Object.keys(data.Book1.topics).length; i++) {
      var an=document.createElement('a');
      var r=data.Book1.topics[i];
      an.textContent=r;
    //an.setAttribute("value",r);
      an.setAttribute("href",'javascript:compare("'+r+'");');
      var p=document.createElement('p');

      p.appendChild(an);
      document.getElementById("get").appendChild(p);
      console.log(r);

      //var j=i;
      //document.getElementById("get").innerHTML+=++j+". "+r+"<br>";
      //document.getElementById("CN").innerHTML+=++j+". "+r+"<br>";
}
// console.log(data.Book2.name);
// console.log(data.Book3.name);

}


displayCS()
{
  console.log(this.name);
  console.log(Object.keys(data.Book2).length);
    //document.getElementById("CS").innerHTML="";
    document.getElementById("get").innerHTML="";
  for (var i = 0; i < Object.keys(data.Book2.topics).length; i++) {
    var an=document.createElement('a');
    var r=data.Book2.topics[i];
    an.textContent=r;
    //an.setAttribute("value",r);
    an.setAttribute("href",'javascript:compare("'+r+'");');
    var p=document.createElement('p');
    p.appendChild(an);
    document.getElementById("get").appendChild(p);
    console.log(r);
    //var j=i;
    //document.getElementById("CS").innerHTML+=++j+". "+r+"<br>";
    //document.getElementById("get").innerHTML+=++j+". "+r+"<br>";
}
}

displayDF()
{
  console.log(this.name);
  console.log(Object.keys(data.Book3).length);
  //document.getElementById("DF").innerHTML="";
  document.getElementById("get").innerHTML="";
  for (var i = 0; i < Object.keys(data.Book3.topics).length; i++) {
    var r=data.Book3.topics[i];
    var b=data.Book3.name;
    var an=document.createElement('a');
    an.textContent=r;
    an.setAttribute("href",'javascript:compare("'+r+'")');
    var p=document.createElement('p');
    p.appendChild(an);
    document.getElementById("get").appendChild(p);
    console.log(r);
    //var j=i;
    //document.getElementById("DF").innerHTML+=++j+". "+r+"<br>";
      //document.getElementById("get").innerHTML+=++j+". "+r+"<br>";
}
}

}
function compare(value,name)
{
  var s="";
for (var i = 0; i < Object.keys(data.Book2.topics).length; i++) {
  console.log(data.Book2.topics[i]);
if (value==data.Book2.topics[i]) {
  s+=data.Book2.name+",";
  console.log("Book Name::"+data.Book2.name);
}
}
for (var i = 0; i < Object.keys(data.Book2.topics).length; i++) {
  console.log(data.Book3.topics[i]);
if (value==data.Book3.topics[i]) {
//s+=JSON.parse(JSON.stringify(data.Book3.name));
s+=data.Book3.name+",";
console.log("Book Name::"+data.Book3.name);
}
}
for (var i = 0; i < Object.keys(data.Book1.topics).length; i++) {
  console.log(data.Book1.topics[i]);
if (value==data.Book1.topics[i]) {
  s+=data.Book1.name+",";
console.log("Book Name::"+data.Book1.name);
}
}
s=s.replace(/,(\s+)?$/,'');
console.log(s);
document.getElementById("name").innerHTML=s;

}
class topic extends Book {
  print()
  {
    console.log(this.name);
  }

}
function CN()
{
  document.getElementById("name").innerHTML="";
var cn= new topic("Computer Network");
//b.print();
cn.displayCN();
//console.log(text);
}
function CS()
{
  document.getElementById("name").innerHTML="";
  var cs=new topic("Computer Security");
  cs.displayCS();
}
function DF()
{
  document.getElementById("name").innerHTML="";
  var df= new topic("Digital Forensic");
  df.displayDF();
}
