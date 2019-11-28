var mysql = require('./mysqlconn').pool;



var names = [{ name: "Miguel", genders:["Male"], types: ["FirstName"]},
{name:"Francisco", genders:["Male"], types: ["FirstName","LastName"]},
{name:"Ana", genders:["Male"], types:["FirstName"]}];

module.exports.getRandomName = function(callback) {
    mysql.getConnection(function(err, conn){  
        if (err) {
            if (conn) conn.release(); 
            callback(err); 
        }
        else conn.query("select name_text from names ORDER BY RAND() LIMIT 1", 
        function(err, rows) {
            conn.release();
            callback({name: rows[0].name_text});    
        })  
    })   
}

module.exports.saveName = function(data,callback) {
    console.log(data);
    /*
    mysql.getConnection(function(err, conn){  
        if (err) {
            if (conn) conn.release(); 
            callback(err); 
        }
        else conn.query("insert into names", 
        function(err, rows) {
            conn.release(); 
            callback({status:"Ok", currentSize:names.length });   
        })  
    })*/   
}
