		//Jquery to activate on the hide event
		$("#content" + divID).on("show", function () {
			change = "";
		});
		//Jquery for content div ID 2-1

			
		
		
	//Jquery to show when page has loaded
		$("#content-1").append("<p>The page has just loaded. </br> This the home page. </p>");
		
	//Jquery to select and filter information on the page	
	
            //$("p").css("border", "3px solid red");
            //$(".selectors").css("border", "3px solid red");
            //$("#intro").css("border", "3px solid red");
			$("p:first").css("border", "3px solid red");
            //$("h2:not(.selectors)").css("border", "3px solid red");
        });
		
(function ($) {
	  $.each(['show', 'hide'], function (i, ev) {
	    var el = $.fn[ev];
	    $.fn[ev] = function () {
	      this.trigger(ev);
	      return el.apply(this, arguments);
	    };
	  });
	})(jQuery);
		-->