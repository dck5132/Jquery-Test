$(document).ready(function() {
			
	/*Jquery to show/hide divs. This will allow many examples to fit on one page.
	This will only run inside nav and for anchor elements with an id that starts with Anchor*/
			
	var divID ="";
	var change ="";
	
	//Jquery to show when page has loaded
	$("#content-1").append("<p>The page has just loaded. </br> This the home page. </p>");
				
	$("nav").on("click", function (event) {
		var anchorID = event.target.id;
		var checks ="";
					
					
		if (anchorID.match("^Anchor")) {
					
			$('li a.select').removeClass('select');
			$(event.target).addClass('select');
						
			divID = anchorID.replace("Anchor", "");
							
			checks = "content" + divID;
						
			$('div:not(#' +checks+')').hide();
			$("#content" + divID).show();
		}
				
	});
	
	//Jquery to activate on the hide event
	$("#content-2-1").on("hide", function () {
		change = $(".border-selector").css("border", "none");
	});
		//Jquery for content div ID 2-1
				
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
				$("#example").html("<h2>This is a new H2</h2>");
				break;
			case "cre-5":
				$("#example").text("<h2>This is a new H2</h2>");
				break;
			default:
				if(event.target.nodeName == "UL") {
					break;
				}
				else {
					alert("Warning not built yet");
					break;
				}
				
					
		}
	});
	
});

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