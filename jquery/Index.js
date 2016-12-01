$(document).ready(function() {
			
	/*Jquery to show/hide divs. This will allow many examples to fit on one page.
	This will only run inside nav and for anchor elements with an id that starts with Anchor*/
			
	var divID="";
	var change = "";
	
	//Jquery to show when page has loaded
	$("#content-1").append("<p>The page has just loaded. </br> This the home page. </p>");
				
	$("nav").on("click", function () {
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
		console.log("1");
	});
		//Jquery for content div ID 2-1
				
	$(".choices").on("click", function() {
			
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
				change = $("#intro").css("border", "3px solid red");
				break;
			case "sel-5":
				change = $(".border-selector").css("border", "none");
				change = $("#content-2-1 p").filter(":first").css("border", "3px solid red");
				break;
			case "sel-6":
				change = $(".border-selector").css("border", "none");
				change = $("h2:not(#selector)").css("border", "3px solid red");
				break;
			default:
				change = $(".border-selector").css("border", "none");
					
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