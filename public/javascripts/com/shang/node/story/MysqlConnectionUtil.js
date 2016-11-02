/**
 * Created by shangjie-work on 2016/11/2.
 */
var mysql = require("mysql");
module.exports = MysqlConnectionUtil;
function MysqlConnectionUtil(){}
MysqlConnectionUtil.getConnection =  function getConnection(){
    var conn =  mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'world'
    });
    conn.connect();
    return conn;

}