"use strict";

$().ready(function() {
	$("#user").click(function() {
		getUsers();
	});

	$("#status").click(function() {
		getStatus();
	});


	
});

function getStatus() {
	$.getJSON("http://localhost:8080/Status/List")
		.done(function(status) {
			console.log(status);
			buildStatusTable(status);
		});
}

function getUsers() {
	$.getJSON("http://localhost:8080/users/")
		.done(function(users) {
			console.log(users);
			buildUsersTable(users);
		});
}

function buildUsersTable(users) {
	var tbody = $("#tlist");
	tbody.empty();
	//console.log("# of users="+users.length);
	for (var u of users) {
		var str = "<tr><td>Name:</td><td>"+u.firstName+" "+u.lastName+
					"</td></tr>";
		//console.log(str);
		tbody.append(str);
	}
}

function buildStatusTable(status) {
	var tbody = $("#tlist");
	tbody.empty();
	//console.log("# of status="+users.length);
	for (var s of status) {
		var str = "<tr><td>Desc:</td><td>"+s.Description+" ["+s.Id+
					"]</td></tr>";
		console.log(str);
		tbody.append(str);
	}
}