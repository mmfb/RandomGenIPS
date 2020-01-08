var mysql = require('./mysqlconn').pool;


// Old data, not used anymore
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

module.exports.getGenders = function(callback) {
    mysql.getConnection(function(err, conn){  
        if (err) {
            if (conn) conn.release();
            console.log(err) 
            callback(err); 
        }
        else conn.query("select * from genders", 
        function(err, rows) {
            conn.release();
            if (err) {
                console.log(err)
                callback(err)
            } else callback(rows);    
        })  
    })   
}

module.exports.getTypes = function(callback) {
    mysql.getConnection(function(err, conn){  
        if (err) {
            if (conn) conn.release();
            console.log(err) 
            callback(err); 
        }
        else conn.query("select * from types", 
        function(err, rows) {
            conn.release();
            if (err) {
                console.log(err)
                callback(err)
            } else callback(rows);    
        })  
    })   
}

module.exports.saveName = function(data,callback) {
    console.log(data);
    mysql.getConnection(function(err, conn){  
        if (err) {
            if (conn) conn.release(); 
            console.log(err)
            callback(err); 
        }
        else conn.query("insert into names (name_text) values (?)",[data.name], 
        function(err1, res) {
            if (err1) {
                conn.release();
                console.log(err1) 
                callback(err1);
                return;
            }
            var sql = "insert into names_genders (names_fk,genders_fk) values "+
            Array(data.genders.length).fill("("+res.insertId+",?)").join(",");
            conn.query(sql,data.genders, function(err2,res2) {
                if (err2) {
                    conn.release(); 
                    console.log(err2) 
                    callback(err2);
                    return;
                }
                var sql2 = "insert into names_types (names_fk,types_fk) values "+
                Array(data.types.length).fill("("+res.insertId+",?)").join(",");
                conn.query(sql2,data.types, function(err3,res3) {
                    conn.release(); 
                    if (err3) {
                        console.log(err3) 
                        callback(err3);
                        return;
                    }
                    callback({status:"Ok", info:[res,res2,res3] });       
                })

            })
               
        })  
    })
   
}
