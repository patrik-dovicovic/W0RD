var fs = require('fs');

var word = "stroj"
var guess = "jotrs"
var data
var correct_position = []
var contain = []

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
            correct_position.push(guess[i])
        }else{correct_position.push("-")}
    }
    for (var i = 0; i < guess.length; i++) {
        for (var j = 0; j < guess.length; j++) {
            if (word[i] === guess[j]){
                contain.push(guess[j])
            }
        }
    }
    console.log("-----")
    console.log("correct position: ", correct_position)
    console.log("contain: ", remove_duplicates(contain = contain.filter( ( el ) => !correct_position.includes( el ) )))
});


function remove_duplicates(arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    for (var key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
}



