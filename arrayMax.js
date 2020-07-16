var marks = [45, 67, 56, 87, 23, 43];

var max = marks[0];

for (var i=0; i < marks.length; i++){
    var element = marks[i];
    if (element > max){
        max = element;
    }
}

console.log("Highest value: ", max)