var rollId = [ 34, 3, 22, 34, 22, 24, 23, 34, 43, 24, 1, 4 ];
var uniqueID = [];

for (var i =0; i < rollId.length; i++){
    var element = rollId[i];
    var index = uniqueID.indexOf(element);
    if ( index == -1){
        uniqueID.push(element);
    }
}

console.log(uniqueID);