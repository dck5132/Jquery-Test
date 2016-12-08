$(document).ready(function() {
	//global vars
	var divID ="";
	var change ="";
	
	//Jquery to show when page has loaded
	$("#content-1").append("<p>The page has just loaded. </br> This the home page. </p>");
	$("#content-1").show();
	
	// navigation jquery function
	$("nav").on("click", function (event) {
		var anchorID = event.target.id;
		var showing ="";
		var hiding = "";			
					
		if (anchorID.match("^Anchor")) {
					
			$('li a.select').removeClass('select');
			$(event.target).addClass('select');
						
			divID = anchorID.replace("Anchor", "");
				
			showing = "#content" + divID;
			hiding = $("div[class='content']");
			
			$(hiding).hide();
			$(showing).show();
		}

	});
	
//Jquery to activate on the hide event, this is used to reset the divs as they are hidden
	$("#content-2-1").on("hide", function () {
		change = $(".border-selector").css("border", "none");
	});
	$("#content-3-1").on("hide", function () {
		$("#example-3-1").html("");
		$("#creation").html("Content Creation");
	});
	$("#content-4-1").on("hide", function () {
		$("#testDiv").animate({top: "0"})
		.animate({left: 0})
		$("#testDiv").css({
			width: "",
			height: "",
			fontSize: "",
			borderWidth: ""
		});
	});
	// content-5-1 does not require a hide function, it resets automatically without this
	$("#content-6-1").on("hide", function () {
		$("example-6-1").empty();
	});
	
	// Jquery that activates on when this div is shown
	$("#content-5-1").on("show", function () {
		$("#example-5-1").on("mousemove", onMouseOver);
        $("#example-5-1").on("click", onMouseClick);
        $("#example-5-1").on("mouseleave", onMouseLeave);
	});
	
// jquery switch that changes the div when the corresponding element is clicked				
	$(".choices").on("click", function(event) {
			
		var target = event.target.id;
		
		switch(target) {
			case "sel-1":
				change = $(".border-selector").css("border", "none");
				break;
			case "sel-2":
				change = $(".border-selector").css("border", "none");
				change = $("#content-2-1 p").css("border", "3px solid red");;
				break;
			case "sel-3":
				change = $(".border-selector").css("border", "none");
				change = $("#selector").css("border", "3px solid red");
				break;
			case "sel-4":
				change = $(".border-selector").css("border", "none");
				change = $("#intro-2-1").css("border", "3px solid red");
				break;
			case "sel-5":
				change = $(".border-selector").css("border", "none");
				change = $("#content-2-1 p").filter(":first").css("border", "3px solid red");
				break;
			case "sel-6":
				change = $(".border-selector").css("border", "none");
				change = $("#content-2-1 h2:not(#selector)").css("border", "3px solid red");
				break;
			case "cre-1":
				$("#example").html("");
				$("#creation").html("Content Creation");
				break;
			case "cre-2":
				var newP = $("<p>");
				newP.append("<em>Hello There</em>");
				$("#example").html(newP);
				break;
			case "cre-3":
				$("#creation").prepend("Watch This! ");
				break;
			case "cre-4":
				$("#example-3-1").html("<h2>This is a new H2</h2>");
				break;
			case "cre-5":
				$("#example-3-1").text("<h2>This is a new H2</h2>");
				break;
			case "ani-1":
				$("#testDiv").animate({top: "0"}, "slow")
				.animate({left: 0}, "500")
				$("#testDiv").css({
					width: "",
					height: "",
					fontSize: "",
					borderWidth: ""
				});
				break;
			case "ani-2":
				$("#testDiv").animate({width: 400}, 300)
				.animate({height: 300}, 400)
				.animate({left: 200}, 500)
				.animate({top: "+=100", borderWidth: 10}, "slow")
				break;
			case "ajx-1":
				$("example-6-1").empty();
				break;
			case "ajx-2":
				getContent();
				break;
			case "ajx-3":
				loadHTML();
				break;
				
			default:
				if(event.target.nodeName == "UL") {
					break;
				}
				else {
					alert("Warning not built yet. Wait for the next update");
					break;
				}		
		}
	});
	
});

//Jquery function that hides/shows divs
(function ($) 
{
    $.each(['show', 'hide'], function (i, ev) 
    {
        var el = $.fn[ev];
        $.fn[ev] = function () 
        {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });
})(jQuery);
// functions to define events that occur when the mouse meets their criteria
function onMouseOver(evt) {
            $("#example-5-1").text(evt.type + ": " + evt.pageX + ", " + evt.pageY + "\n" +
                              "Button: " + evt.which + " Key: " + evt.metaKey);
}
function onMouseClick(evt) {
            $("#example-5-1").text(evt.type + ": " + evt.pageX + ", " + evt.pageY);
            $("#example-5-1").off("mousemove", onMouseOver);
}
function onMouseLeave(evt) {
            $("#example-5-1").text("mouseleave");
			$("#example-5-1").on("mousemove", onMouseOver);
}
// functions to grab data from other files via AJAX
function getContent() {
            $.ajax("Included_Files/sampletextcontent.txt", 
                   { success: setContent, 
                     type: "GET", 
                     dataType: "text" });
        }
        
        function setContent(data, status, jqxhr) {
            $("#example-6-1").text(data);
        }
        
        function loadHTML() {
            $("#example-6-1").load("Included_Files/samplehtml.html");
        }