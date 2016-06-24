// 指令交互
var process = require("child_process");
// 日志监控
// var tail = process.spawn("tail", ["-fn 200", "/root/test.log"]);
// tail.stdout.on("data",function(data){
//     console.info(data.toString("utf8"));
// });

// 数据拉取
// var git = process.spawn("git", ["clone", "https://github.com/jik1992/fork-jcpu.sh.git"]);
// git.stdout.on("data", function(data) {
//     console.info(data.toString("utf8"));
// });

// git.on("exit", function(code, signal) {
//     console.log('子进程已退出，代码：' + code);
// });

//编译
var mvn=process.spawn("free",["-m"]);
mvn.stdout.on("data",function(data){
   console.info(data.toString("utf8"));
});
