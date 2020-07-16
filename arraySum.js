// var numbers = [ 2,5, 6, 76, 43, 2, 4, 43, 59];
// var sum = 0;

// for (var i=0; i < numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;
// }

// console.log( "Total of the numbers:", sum);



function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var numbers = [ 43, 34, 55, 345, 432, 65];
var results = getArraySum(numbers);
console.log(" Total of the numbers: ", results);