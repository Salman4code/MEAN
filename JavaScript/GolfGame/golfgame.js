function gameCalculation(stroke,par)
{
  if(stroke==1)
  {
    //document.write("Hole-in-One");
    document.getElementById('demo').innerHTML="Hole-in-One";
  }
  else if (stroke<=par-2) {
  //  document.write("Eagle");
    document.getElementById('demo').innerHTML="Eagle";
  }
  else if (stroke==par-1) {
  //  document.write("Birdie");
    document.getElementById('demo').innerHTML="Birdie";
  }
  else if (stroke==par) {
  //  document.write("par");
document.getElementById('demo').innerHTML="Par";
  }
  else if (stroke==par+1) {
  //  document.write("Bogey");
    document.getElementById('demo').innerHTML="Bogey";
  }
  else if (stroke==par+2) {
    //document.write("Double Bogey");
    document.getElementById('demo').innerHTML="Double Bogey";
  }
  else if (stroke>=par+3) {
  //  document.write("GO Home!");
    document.getElementById('demo').innerHTML="GO Home!";
  }
}
