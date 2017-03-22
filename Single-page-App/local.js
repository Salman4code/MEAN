var j = 0,
  temp = [];
$(document).ready(function() {

  $("#login1").click(function() {
    alert("hi");
    var usrnm = $("#usr").val();;
    var pwd = $("#pwd").val();
    localStorage.usr = $("#usr").val();
    localStorage.pwd = $("#pwd").val();
    var obj = JSON.parse(userinfo);
    console.log(obj);
    if (localStorage.usr == localStorage.emailid) {
      console.log("login Successfully");
    }
    //  console.log(localStorage.usr);
    // console.log(localStorage.pwd);
  });
  $("#submit").click(function() {

    nm = JSON.parse(localStorage.getItem("userdetail"));
    console.log(nm);
    if(nm!==null){
      console.log("in");
      temp=nm;
      var userinfo = {};
      userinfo.name = $("#name").val();
      userinfo.emailid = $("#emid").val();
      userinfo.pswd = $("#pswd").val();
      userinfo.rpswd = $("#rpwd").val();
      console.log(userinfo);
      temp[temp.length] = userinfo;
      if (typeof(Storage) !== undefined) {
        localStorage.setItem('userdetail', JSON.stringify(temp));
      }
    }else{
      console.log("nm null");
      var userinfo = {};
      userinfo.name = $("#name").val();
      userinfo.emailid = $("#emid").val();
      userinfo.pswd = $("#pswd").val();
      userinfo.rpswd = $("#rpwd").val();
      console.log(userinfo);
      // localStorage.name=$("#name").val();
      // localStorage.emailid=$("#emid").val();
      // localStorage.pswd=$("#pswd").val();
      // localStorage.rpwd=$("#rpwd").val();
      temp[temp.length] = userinfo;
      console.log(temp.length);
      if (typeof(Storage) !== undefined) {
        localStorage.setItem('userdetail', JSON.stringify(temp));
      }
    }
    // console.log(nm[0].name);
    // console.log(nm[0].emailid);
    // console.log(nm[0].pswd);
    // console.log(nm[0].rpswd);
    // temp[temp.length] = nm[0];
    // console.log(temp);
    // nm[nm.length]=userinfo;
    // console.log(nm);
  });
});
