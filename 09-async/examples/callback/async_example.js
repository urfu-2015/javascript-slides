var fs = require('fs');
var async = require('async');

function readTwoFiles(cb) {
    async.parallel([
        fs.readFile.bind(fs, __dirname + '/first.txt', 'utf-8'),
        fs.readFile.bind(fs, __dirname + '/second.txt', 'utf-8')
    ], function (err, data) {
        cb(err, data[0] + data[1])
    });
}

function readTwoFiles(cb) {
    async.parallel([
        fs.readFile.bind(fs, __dirname + '/first.txt', 'utf-8'),
        fs.readFile.bind(fs, __dirname + '/second.txt', 'utf-8')
    ], function (err, data) {
        cb(err, data[0] + data[1])
    });
}


readTwoFiles(function function_name(err, data) {
    console.log(arguments);
})
