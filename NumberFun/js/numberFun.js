$().ready(function() {
	console.log("It worked.");

	$("#minus").click(function() {
		subtract();
	});

	$("#plus").click(function() {
		add();
	});

});

function subtract() {
	var nbr1 = Number($("#counter").val());
	nbr1-=1;
	console.log("nbr is "+nbr1);
	$("#counter").val(nbr1);
	formatCounter(nbr1);
}

function add() {
	var nbr2 = Number($("#counter").val());
	nbr2+=1;
	console.log("nbr is "+nbr2);
	$("#counter").val(nbr2);
	formatCounter(nbr2);
}

function formatCounter(x) {
	var mod2 = x%2;
	var mod3 = x%3;
	var mod7 = x%7;
	console.log("mod 2 = "+mod2+", mod 3 = "+mod3+"mod 7 = "+mod7);
	if (mod2==0) {
		$("#counter").css("color","red");
	}
	else {
		$("#counter").css("color","black");	
	}
	if (mod3==0) {
		$("#counter").css("font-style","italic");	
	}
	else {
		$("#counter").css("font-style","normal");
	}
	if (mod7==0) {
		$("#counter").css("font-weight","bold");
	}
	else {
		$("#counter").css("font-weight","normal");
	}
}