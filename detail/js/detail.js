"use strict";

$().ready(function() {
	console.log("Worked!");
	$("#getpk").click(function() {
		console.log("Button clicked!");
		var id = $("#pk").val();
		getData(id);
	});
});

function getData(id) {
	console.log("getData "+id);
	$.getJSON("http://prs.doudsystems.com/Products/Get/"+id)
	.done(function(product) {
		console.log(product);
		fillData(product);
	});
}

function fillData(product) {
	$("#idx").val(product.ID);
	$("#name").val(product.Name);
	$("#vendorpartnumber").val(product.VendorPartNumber);
	$("#price").val(product.Price);
	$("#unit").val(product.Unit);
}