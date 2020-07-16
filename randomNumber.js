// round any number code 3- 6 and console.log(result3)

// var num = 2.50;
// // var result =  Math.floor(num);
// // var result2 = Math.ceil(num);
// var result3 = Math.round(num);

for (var i = 0; i<10; i++){   // with in 90 number only 10 random number will give output
    var randomNumber = Math.random() * 90; // random number will generate with in 90
    var output = Math.round(randomNumber);
    console.log(output);
}


