


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

document.write("Function called with apply: <br/>");
console.log(callMe.apply('Bridgelabz',[4,5,6]));
document.write(callMe.apply('Bridgelabz', [ 4 ,5,6]));
