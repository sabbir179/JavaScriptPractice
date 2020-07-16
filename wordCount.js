var speech = "How are you? I'm fine, thank you.";

var count = 0;
for (var i=0; i < speech.length; i++){
    var char = speech[i];
    // console.log(char);

    if(char == " " && speech[i -1] != " "){
        count ++;
    }
}
count++;
console.log(count);