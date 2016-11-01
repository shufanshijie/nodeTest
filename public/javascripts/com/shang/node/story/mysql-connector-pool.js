/**
 * Created by shangjie-work on 2016/11/1.
 */
var mysql = require("mysql");
module.exports = Pool;
function Pool() {
    this.pool = this.create();
};
Pool.create = function create(){
    var pool = mysql.createPool({
        host:'localhost',
        user:'root',
        password:'root',
        database:'world',
        connectionLimit : 10
    });
    return pool;
}
Pool.getPool = function getPool(){
    if(this.pool){
        return this.pool;
    }else{
        return this.create();
    }
}
Pool.end = function end(ck){
    if(this.pool)
        this.pool.end(ck);
}