//const require
const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const fs = require('fs');

//var
var word = "slnko"
var guess = ""
var data
var correct_position = []
var contain = []
var check_if_word_exist = true

//read list of all words
fs.readFile('sk.txt', function (err, read_data) {
    if (err) throw err;
    data = read_data.toString()
});

//app
app.use(cors());
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.listen(80);
console.log("ok")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/', 'new.html'));
    console.log("server is running")
});

app.get('/change', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/', 'change.html'));
});

app.post('/changeAPI', (req, res) => {
    console.log(req.body[0])
    if(data.indexOf(req.body[0].text) > -1){
        word = req.body[0].text
    }
});

app.post('/check', function (req, res) {
    guess = req.body[0].guess
    correct_position = []
    contain = []

    if (data.indexOf(guess) > -1 || !check_if_word_exist){
        if (guess.length == 5){
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
            res.send({"position": correct_position,"contain":remove_duplicates(contain = contain.filter( ( el ) => !correct_position.includes( el ) ))})
        }else{
            res.send("the word must contain 5 letters")
        }
    }else{
        res.send("incorrect")
    }  
})

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
