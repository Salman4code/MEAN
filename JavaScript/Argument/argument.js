


function callMe(){
    var s = "";

    s +=this;

    for (i in callMe.arguments) {
        s +="\t" + callMe.arguments[i];

    }
    return s;
}
// document.write("Original function: <br/>");
// document.write(callMe(1, 2));
// document.write("<br/>");
function display(){
var z = (document.getElementById("getvalue").value);
//document.write(z);
console.log(callMe.apply('Bridgelabz',[z]));
//document.write("Function called with apply: <br/>");
var x=callMe.apply('Bridgelabz',[z])
document.getElementById('show').value = x;
//document.write(callMe.apply('Bridgelabz',[z]));
// console.log(callMe.apply('Bridgelabz',[1,2,3]));
// console.log(callMe.apply('Bridgelabz',[4,5,6]));
// document.write(callMe.apply('Bridgelabz', [ 1,2,3]));
// document.write(callMe.apply('Bridgelabz', [ 4,5,6]));
}
