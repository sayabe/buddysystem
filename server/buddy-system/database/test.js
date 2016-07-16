var db=require('./database')

var conn = db.establishConnection();
console.log("Established Connection");
var id1 = db.insertNewUser("Jazz");
console.log("Inserted new user 1");
console.log(id1);
var id2 = db.insertNewUser("Prathi");
console.log("Inserted new user 2"+id2);
