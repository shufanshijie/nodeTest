/**
 * Created by shangjie-work on 2016/10/31.
 * 来点中文看看
 */
var http = require("http");
var Iconv = require("iconv-lite");
http.get("http://www.dingdianzw.com/book/2430.html",function(res){
    var buffers = [], size = 0;
    res.on('data', function(buffer) {
        buffers.push(buffer);
        size += buffer.length;
    });
    res.on('end', function() {
        var buffer = new Buffer(size), pos = 0;
        for(var i = 0, l = buffers.length; i < l; i++) {
            buffers[i].copy(buffer, pos);
            pos += buffers[i].length;
        }
        var result = Iconv.decode(buffer,"gbk");
        console.log(result)
    });
});
