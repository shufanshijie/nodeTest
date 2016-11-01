/**
 * Created by shangjie-work on 2016/10/31.
 * 来点中文看看
 */
var http = require("http");
var Iconv = require("iconv-lite");
var jsdom = require("jsdom");
var pageString = http.get("http://www.bai-ma.com/book/",function(res){
    var convertStream = Iconv.decodeStream('GBK');
    res.pipe(convertStream).collect(function(error,str){
        console.log(str);
        //jsdom.env(str, ["../../../../../../node_modules/jquery/dist/jquery.js"], function (err, window) {
        //    var $ = require("jquery")(window)
        //    var content = $("#htmlContent");
        //    var text = content.html();
        //    console.log(text);
        //});
    });
}).on("error",function(error){
    console.error(error);
});
function saveHtml(data){
    var pool = require("./mysql-connector-pool").getPool();
    pool.query("insert into ");
}
