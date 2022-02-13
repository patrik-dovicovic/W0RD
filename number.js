var fs = require('fs');

var word = "stroj"
var guess = "stroj"
var data
var correct_position = 0
var contain = 0

fs.readFile('sk.txt', function (err, read_data) {
    if (err) throw err;
    data = read_data.toString()
    // console.log(read_data.toString());

    if (data.indexOf(guess) > -1){
        console.log("found")
    }else{
        console.log("not found")
    }
    if (guess === word){
        console.log("correct")
    }else{
        console.log("incorrect")
    }
    for (var i = 0; i < guess.length; i++) {
        if (word[i] === guess[i]){
            correct_position++
        }
    }
    console.log(correct_position)
    for (var i = 0; i < guess.length; i++) {
        for (var j = 0; j < guess.length; j++) {
            if (word[i] === guess[j]){
                contain++
            }
        }
    }
    console.log(contain - correct_position)


});





