var fs = require('fs');
function readTwoFiles(cb) {
    var otherData;

    fs.readFile(__dirname + '/first.txt', 'utf-8', function (err, data) {
        err && cb(err);
        if (otherData) {
            cb(null, data, otherData);
        } else {
            otherData = data;
        }
    });

    fs.readFile(__dirname + '/second.txt', 'utf-8', function (err, data) {
        err && cb(err);
        if (otherData) {
            cb(null, otherData, data);
        } else {
            otherData = data;
        }
    });
}
