var http = require("http");  //同步调用模块
var fs = require("fs");
var path = require("path");


//能过http.createServer方法来创建一个服务器
//req:用来接收客户端的输入  request
//res:用来向客户端输入内容
http.createServer(function(req,res){
    res.writeHeader(200, {'Content-Type':'text/html;charset=UTF-8'})
    res.write("能过http.createServer方法来创建一个服务器")
    res.end("server is ready!");
}).listen(4000); //port

console.log("server is ready on port 4000!")