"use strict";

$().ready(function() {
	console.log("It worked");
	console.log("Before JSON call");
	$.getJSON("http://prs.doudsystems.com/Users/List")
		.done(function(users) {
			console.log(users);
			buildTable(users);
		});
	console.log("After JSON call");

});

function buildTable(users) {
	for (var u of users) {
		var str = "Name: "+u.FirstName+" "+u.LastName;
		console.log(str);
		$(document.body).append(str+"<br>");
	}
}