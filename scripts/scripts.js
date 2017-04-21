$(document).scroll(function(){
	console.log( $(document).scrollTop()  );


		$("#row1").css("right", String$($(document).scrollTop() + 1500)  "px");
		$(".pics").css("#transform","rotate(" + $(document).scrollTop() + "deg)");

			if ($(document).scrollTop() > 0 ){
				$("#row2").css("left", String($(document).scrollTop() - 1000 + "px");


			}


	var testNumber = 0;

	setInterval(showNum, 250);

	function showNum(){
		animationCount++;
		if (animationCount > 4){
			animationCount = 1;
		}
		if (animationCount == 1){
			$("#character").css("background-position", "0px 0px");
			console.log("1")
		} else if (animationCount == 2) {
			$("#character").css("background-position","206px 0px");
		}
		else if (animationCount == 3) {
			$("#character").css("background-position","412px 0px");
		}
		else if (animationCount == 4) {
			$("#character").css("background-position","618px 0px");
		}
		console.log(animationCount);
});








