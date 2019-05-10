$(function() {

	$(".next").hide();
	$("#Q2").hide();
	$("#Q3").hide();

	$("#opt1").draggable({revert:"invalid"});
	$("#opt2").draggable();
	$("#opt3").draggable({revert:"invalid"});
	$("#opt4").draggable();
	$("#opt5").draggable({revert:"invalid"});
	$("#opt6").draggable({revert:"invalid"});
	$("#opt7").draggable({revert:"invalid"});
	$("#opt8").draggable({revert:"invalid"});
	$("#opt9").draggable();

	if($("#Q1").is(':visible')){
		
		//  sets up the first question
		$("#unknown").droppable(
		{
			accept: "#opt2",
			tolerance: "fit",
			drop: function(event, ui)
			{
				$(this)
				.removeClass("x-block")
				.addClass("block")
				.text("#");
				$("#opt1").hide();
				$("#opt2").hide();
				$("#opt3").hide();
				$(".problem").text("correct!");
				$(".answers").hide();
				$(".tooltip").hide();
				$(".next").show();
				
				// transitions to the second question

				if($("#next").click(function()

				{
					$("#Q1").hide();
					$("#Q2").show();
					$(".problem").text("problem two.");
					$(".answers").show();
					$(".next").hide();
					$(".tooltip").show();
					$("#unknown2").droppable(
					{
						accept: "#opt4",
						tolerance: "fit",
						drop: function(event, ui)
						{
							$(this)
							.removeClass("x-block")
							.addClass("block")
							.text("#");
							$("#opt4").hide();
							$("#opt5").hide();
							$("#opt6").hide();
							$(".problem").text("correct!");
							$(".answers").hide();
							$(".tooltip").hide();
							$(".next").show();
							if($(".next").click(function()
							{
								console.log("are we even here?");
								$("#Q2").hide();
								$("#Q3").show();
								$(".problem").text("problem three.");
								$(".answers").show();
								$(".next").hide();
								$(".tooltip").show();
								$("#unknown3").droppable(
								{
									accept: "#opt9",
									tolerance: "fit",
									drop: function(event, ui)
									{
										$(this)
										.removeClass("x-block")
										.addClass("block")
										.text("#");
										$("#opt7").hide();
										$("#opt8").hide();
										$("#opt9").hide();
										$(".problem").text("correct!");
										$(".answers").hide();
										$(".tooltip").hide();
									}
								});
							}));
						}
					});
				}));
			}
		});
	}
})