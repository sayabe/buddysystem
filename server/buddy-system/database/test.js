var db=require('./database')

var conn = db.establishConnection();
console.log("Established Connection");
id1 = db.insertNewUser("Jazz");
console.log("Inserted new user 1");
id2 = db.insertNewUser("Prathi");
console.log("Inserted new user 2");
conn.close()