function calculate()
{
  var a=Number(document.getElementById('first').value);
  var b=Number(document.getElementById('second').value);
  var op=document.getElementById('operator');
  var result=0;
  var op1=op.options[op.selectedIndex].value;
  //document.write(op1);
  if(op1=="Addition")
  {
    result=(a+b);

  }
  else if (op1=="Substraction") {
    result=a-b;
  }
  else if (op1=="Multiplication") {
    result=a*b;
  }
  else if (op1=="Divide") {
    result=a/b;
  }
  else if (op1=="Modulus") {
    result=a%b;
  }
  
  document.getElementById('sum').value=result;
}
