$(document).ready(function()
{
$("#login").click(function()
{
  var userdetail={};
  userdetail.usrnm=$("#usr").val();
  userdetail.paswd=$("#pwd").val();
  console.log(userdetail);
  localStorage.usr=$("#usr").val();
  localStorage.pwd=$("#pwd").val();
  console.log(localStorage.usr);
  console.log(localStorage.pwd);
});
});
