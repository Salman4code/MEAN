
var articles='{ "Book":['+'{"Author":"S.K","PublishedDate":"27/02/2017","Publication":"SK Publication"},'+
              '{"Author":"S.S","PublishedDate":"6/02/2017","Publication":"SS Publication"},'+
              '{"Author":"P.M","PublishedDate":"14/01/2017","Publication":"PM Publication"},'+
              '{"Author":"A.S","PublishedDate":"10/02/2017","Publication":"AS Publication"},'+
              '{"Author":"M.B","PublishedDate":"5/01/2017","Publication":"MB Publication"} ]}';

var obj=JSON.parse(articles);

function what(){

  var ran =[Math.floor(Math.random()* obj.Book.length)];
 //console.log(ran);
//  document.write("Author - >"+obj.Book[ran].Author+"  Published Date - >"+obj.Book[ran].PublishedDate+" Publication - >"+obj.Book[ran].Publication);
 document.getElementById("art").innerHTML="Author:: "+obj.Book[ran].Author+"<br>Published Date::"+obj.Book[ran].PublishedDate+"<br>Publication:: "+obj.Book[ran].Publication+"<br>"+Date();
setTimeout(what,1000);

};
