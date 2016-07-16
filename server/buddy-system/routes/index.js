var express = require('express');
var router = express.Router();


var database = require('../database/database');

router.get('/dashboard', function(req, res, next) {
	res.render('startbootstrap-sb-admin-2-1.0.8/pages/login.html');
})

router.get('/home', function(req, res, next) {
	console.log('home route start point');
	var userID = req.query.userID;
	database.addTask('run', 0, 0, 0);

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

	//fetch profile

	//fetch tasks
	//fetch graph

	//add task
	console.log('profile route end point');

});

router.get('/yourBuddyList',function(req,res,next){
	console.log('buddy list start point');
	var userID = req.query.userID;

	//fetch all your buddylists

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

	console.log('addNewTask post start point');
});

router.post('/receiveForm',function(req,res,next){

	console.log('receiveForm post start point');

	console.log(req);

	console.log('receiveForm post start point');
});



module.exports = router;
