$(document).ready(function(){
	aboutMeChange();
});
// function test(){
// console.log("hello")
// }
function aboutMeChange(){
	console.log("it worked")
	$("#aboutMebtn").click(function(){
        $("#home_page").fadeOut()
        $("#aboutPage").fadeIn();
		// $("#aboutPage").fadeIn("slow")
	});
	console.log("it worked")
}

