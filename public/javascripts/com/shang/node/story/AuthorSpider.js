/**
 * Created by shangjie-work on 2016/11/2.
 */
var http = require("http");
var Iconv = require("iconv-lite");
var jsdom = require("jsdom");
http.get("http://a.qidian.com/",function(res){
    var convertStream = Iconv.decodeStream('UTF-8');
    res.pipe(convertStream).collect(function(error,str){
        if(error) throw error;
        parseHtml(str);
    });
}).on("error",function(error){
    console.error(error);
});
function parseHtml(str){
    jsdom.env(str,  function (err, window) {
        var $ = require("jquery")(window)
        var bookList = $.find('.all-img-list > li');
        for(var i=0;i<bookList.length;i++){
            var bookItem = $(bookList[i]);
            var authorUrl = bookItem.find('.author > a:eq(0)').attr('href')
            requestAuthor(authorUrl);
        }
    });
}

function requestAuthor(authorUrl){
    //http://me.qidian.com/authorIndex.aspx?id=4362453
    http.get(authorUrl,function(res){
        var convertStream = Iconv.decodeStream('UTF-8');
        res.pipe(convertStream).collect(function(error,str){
            if(error) console.error(error);
            parseAuthor(str);
        });
    }).on("error",function(error){
        console.error(error);
    });
}

function parseAuthor(authorHtmlStr){
    jsdom.env(authorHtmlStr,  function (err, window) {
        var $ = require("jquery")(window)
        var a = $($.find('.big-photo >a '));
        if(a.length==0) {
            console.log('parseAuthor error a is '+ a.html());
            return;
        }
        console.log(a, a.html());
        var authorId = $($.find('.big-photo >a ')).attr('href').split('id=')[1];
        var authorName = $($.find('.big-photo >a ')).attr('title');
        console.log('authorId',authorId);
        console.log('authorName',authorName);
        insertDB(authorId,authorName);
    });
}

function insertDB(authorId,authorName){
    var Connection = require('./MysqlConnectionUtil');
    var connection = Connection.getConnection();
    connection.query('select * from author where qidian_id = ?',[authorId],function(error,rows,fields){
        if(rows.length==0){
            connection.query('insert into author (nick_name,qidian_id) values (?,?)',[authorName,authorId],function(error,rows){
                console.log(rows);
                connection.destroy();
            })
        }else{
            connection.end();
        }
    });
}
