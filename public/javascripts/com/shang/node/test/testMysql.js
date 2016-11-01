/**
 * Created by shangjie-work on 2016/11/1.
 */
var mysql = require("mysql");
//var connection = mysql.createConnection({
//    host:'localhost',
//    user:'root',
//    password:'root',
//    database:'world'
//});
//connection.connect();
//connection.query("show tables",function(error,rows,fields){
//    if(error) throw  error;
//    console.log(rows[0]);
//});
//connection.query("insert into test_node (book_name,chapter_index,chapter_name) values (?,?,?)",['完美世界',1,'大荒'],function(error,results){
//   console.log(results);
//});
//connection.end();
//var pool = mysql.createPool({
//    host:'localhost',
//    user:'root',
//    password:'root',
//    database:'world',
//    connectionLimit : 10
//});
//pool.query("insert into test_node (book_name,chapter_index,chapter_name) values (?,?,?)",['完美世界',1,'大荒'],function(error,results){
//    console.log(results);
//});
var pool = require("../story/mysql-connector-pool");
var mysqlPool = pool.getPool();
mysqlPool.getConnection(function(error,connection){
    if(error) throw error;
    connection.query("select * from test_node",function(error,rows){
       console.log(rows.length);
        connection.release();
    });
});

