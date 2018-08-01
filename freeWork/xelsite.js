$(document).ready(function(){

	aboutMeChange(),
	test()
});
function test(){
console.log("hello")
}
function aboutMeChange(){
	$("#aboutMebtn").toggle(function(){
		$("#home_page").hide();
		$("#aboutPage").show()
	})
}

