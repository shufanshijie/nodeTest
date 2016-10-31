/**
 * Created by shangjie-work on 2016/10/31.
 */
var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
    var stream = fs.createReadStream("../story/spider.js");
    stream.pipe(res);
}).listen(3000);
console.log('server had started !')
