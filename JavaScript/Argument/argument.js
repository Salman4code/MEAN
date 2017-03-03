


function callMe(){
    var s = "";

    s +=this;

    for (i in callMe.arguments) {
        s +="\t" + callMe.arguments[i];

    }
    return s;
}
function display(){
var z = (document.getElementById("getvalue").value);
//document.write(z);
console.log(callMe.apply('Bridgelabz',[z]));
//document.write("Function called with apply: <br/>");
var x=callMe.apply('Bridgelabz',[z])
document.getElementById('show').value = x;

}
