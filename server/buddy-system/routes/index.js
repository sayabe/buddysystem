var express = require('express');
var router = express.Router();


var database = require('../database/database');

router.get('/login', function(req, res, next) {
	res.render('startbootstrap-sb-admin-2-1.0.8/pages/login.html');
})

router.get('/home', function(req, res, next) {
	console.log('home route start point');
	var userID = req.query.userID;
	database.addTask(userID,'run', 0, 0, 0);

	// Fetch profile

	// Fetch pending tasks
	// Fetch buddy tasks

	// Fetch random buddies

	// Render view for homepage
	console.log('home route end point');
	res.render('addNewTask.html');

});

router.get('/profile/:userID',function(req, res, next){
	console.log('profile route start point');
	var userID = req.query.userID;

	var userData = database.getProfile(userID);
	//fetch profile

	//fetch tasks
	//fetch graph

	//add task

	//res.render('/profile',{data:userData})
	console.log('profile route end point');

});

router.get('/yourBuddyList',function(req,res,next){
	console.log('buddy list start point');
	var userID = req.query.userID;


	var buddyList = database.getBuddyList(userID);
	//fetch all your buddylists
	/*res.render('yourBuddyList',{"data":buddyList})
	var container = document.getElementById("container")
	for(var i=0;i<buddyList.length;i++){
		container.innerHTML += '<div class="col-lg-4 col-sm-6 text-center">
                <img class="img-circle img-responsive img-center" src="/images/"+database.getFirstName(buddyList[i])+".jpg" alt="">
                <h3>'+database.getFirstName(buddyList[i])+'
                </h3>
            </div>';
*/
	// }


	console.log('buddy list end point');
});



router.get('/addNewTask',function(req,res,next){
	console.log('addNewTask start point');


	//render the form


	console.log('addNewTask end point');
});

router.post('/addNewTask',function(req,res,next){

	console.log('addNewTask post start point');

	/*write to db.
	Task name
	start date
	deadline
	reward = none */
	database.insertTask()

	console.log('addNewTask post start point');
});

router.post('/receiveForm',function(req,res,next){

	console.log('receiveForm post start point');

	console.log(req);

	console.log('receiveForm post start point');
});


module.exports = router;
