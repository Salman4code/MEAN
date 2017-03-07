// window.onload=function gettext()
// {
//   var request =new XMLHttpRequest();
//   request.open("GET",'/home/bridgeit/MEAN/JavaScript/linkedlist/abc.txt',true);
//   request.send(null);
//   request.onreadystatechange=function()
//   {
//     if(request.readyState === 4 && request.status===200)
//     {
//       var type=request.getResponseHeader('Content-Type');
//       if(type.indexOf("text")!==1)
//       {
//         return alert(request.reponseText);
//       }
//     }
//   }
//
// }
window.onload=function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET",'/home/bridgeit/MEAN/JavaScript/linkedlist/abc.txt', true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
