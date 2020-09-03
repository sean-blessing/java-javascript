var frameList = [
// {Id: 1, Desc:"Running", Why:"I feel better"},
// {Id: 2, Desc:"Playing w/ my family", Why:"Makes me happy"},
// {Id: 3, Desc:"Watch a movie", Why:"Relaxes me"}
];

$().ready(function() {
	console.log("It worked.");
	loadTable();

	$("#bowl").click(function() {
		bowl();
	});
});

function bowl() {
	console.log("bowl");
	var frames = [0,0,0,0,0,0,0,0,0,0];
	for (var i=0; i<frames.length; i++) {
		var score = Math.floor(Math.random() * 30)+1;
		frames[i] = score;
	}
	frameList = frames;
	loadTable();
}

function loadTable() {
	console.log("Load table");
	var tbody = $("tbody");
	tbody.empty();
	var item = "<tr>";
	var total = 0;
	for (var f of frameList) {
		item += "<td>" + f + "</td>";
		total+=f;
	}
	item += "<td>" + total + "</td>";
	item += "</tr>";
	tbody.append(item);
}