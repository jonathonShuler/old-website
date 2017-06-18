
var status = "jS";

$(window).scroll(function(){
	
	if($(this).scrollTop()>= 300 && status !== "jonathonShuler") {
		$("#initials-name").text("jonathonShuler");
		status = $("#initials-name").text();
	}
	
	if($(this).scrollTop()< 300 && status !== "jS") {
		$("#initials-name").text("jS");
		status = $("#initials-name").text();
	}
})

