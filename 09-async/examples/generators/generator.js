var fs = require('fs');

function readFile(filename){
    return new Promise(function (fulfill, reject){
        fs.readFile(filename, 'utf-8', function (err, data){
            if (err) { reject(err); }
            else { fulfill(data); }
        });
    });
}

var Promise = require('bluebird');

var firstPromise = Promise.promisify(fs.readFile.bind(fs, __dirname + '/first.txt', 'utf-8'));
var secondPromise = Promise.promisify(fs.readFile.bind(fs, __dirname + '/second.txt', 'utf-8'));

var co = require('co');

co(function *() {
    var data = yield [firstPromise(), secondPromise()];
    console.log(data[0] + data[1]);
})
