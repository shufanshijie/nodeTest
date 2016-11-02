/**
 * Created by shangjie-work on 2016/10/31.
 * 来点中文看看
 */
var http = require("http");
var Iconv = require("iconv-lite");
var jsdom = require("jsdom");
http.get("http://a.qidian.com/",function(res){
    var convertStream = Iconv.decodeStream('UTF-8');
    res.pipe(convertStream).collect(function(error,str){
        if(error) throw error;
        console.log(str);
        //parseHtml(str);
    });
}).on("error",function(error){
    console.error(error);
});
function parseHtml(str){
    jsdom.env(str,  function (err, window) {
        var $ = require("jquery")(window)
        var bookList = $.find('dl');
        for(var i=0;i<bookList.length;i++){
            var bookItem = $(bookList[i]);
            var bookUrl = bookItem.find('dt > a').attr('href');
            var bookImage = bookItem.find('dt > a > img').attr('src');
            var bookName = bookItem.find('dd > h3 > a').html();
            var author = bookItem.find('dd:eq(1) > span').html();
            console.log('bookUrl',bookUrl);
            console.log('bookImage',bookImage);
            console.log('bookName',bookName);
            console.log('author',author);

        }
        //var text = bookList.html();
        //console.log(text);
    });
}



function saveHtml(data){
    var pool = require("./mysql-connector-pool").getPool();
    pool.query("insert into ");
}
