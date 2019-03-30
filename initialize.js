$(document).ready(function(){

	$(".reels-label").click(function(){
		$(".card-deck .bg-dark").removeClass("bg-dark text-light").addClass("bg-light text-dark");
		$(this).closest(".card").removeClass("bg-light text-dark").addClass("bg-dark text-light");
		$(".reels-container").hide();
		$($(this).attr("data-reels-container")).show();
	});
	
	$(".nav-item").click(function(){
		$(".container-fluid").hide();
		$($(this).closest(".nav-item").attr("data-target")).show();
	});
	
	$(".navbar-brand").click(function(){
		$("#resumeContainer").hide();
		$("#portfolioContainer").show();
	});

});