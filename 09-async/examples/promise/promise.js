var fs = require('fs');

function readFile(filename){
    return new Promise(function (fulfill, reject){
        fs.readFile(filename, 'utf-8', function (err, data){
            if (err) { reject(err); }
            else { fulfill(data); }
        });
    });
}

var firstPromise = readFile(__dirname + '/first.txt');
var secondPromise = readFile(__dirname + '/second.txt');

var first;
firstPromise
    .then(function (data) {
        first = data;
        return secondPromise;
    })
    .then(function (data) {
        return first + data;
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });
