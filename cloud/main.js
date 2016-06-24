Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


var process = require("child_process");
var action = require('./../api/action');
// var io = require("./../index.js");

Parse.Cloud.define('free', function(req, res) {

    var free = process.spawn("free", ["-m"]);
    var out = "";
    free.stdout.on("data", function(data) {
        console.info(data.toString("utf8"));
    });
    free.on('exit', function(code, signal) {
        console.log('子进程已退出，代码：' + code);
    });
    console.info(free.pid);
    res.success('success');
});



Parse.Cloud.define('log', function(req, res) {
    res.success('success');
});

