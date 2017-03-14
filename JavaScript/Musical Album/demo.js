var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

var co = JSON.parse(JSON.stringify(collection));
//JSONObject json=new JSONObject(collection);

function UpdateR(id, prop, value) {
if (prop==="tracks" && value !==""){
  if(collection[id][prop]){
  collection[id][prop].push(value);
  }
  else{
    collection[id][prop]=[value];
  }
}
  else if (value!==""){
    collection[id][prop] = value;
  }
  else {
    delete collection[id][prop];
  }


//
//    var s1="";
//    var s=JSON.stringify(collection);
//    console.log(s);
//    for (var i = 0; i < Object.keys(collection).length; i++) {
//   // s+=collectionCopy[i].key;
// s1+=collection[i];
// }


  //document.getElementById("disp").innerHTML=co[0]."2548".album;
   document.getElementById("disp").innerHTML=JSON.stringify(collection);

  return console.log(collection);
}


//updateRecords(2468, "tracks", "ABBAB");
