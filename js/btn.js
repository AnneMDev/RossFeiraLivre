	//==js for login and sign up
	var loginLink = $(".loginLink");
	var signupLink = $(".signupLink");
	var loginct = $( "#login-content" );
	var signupct= $("#signup-content");
	var loginWrap = $(".login-wrapper");
	var overlay = $(".overlay");
	loginWrap.each( function(){
		$(this).wrap('<div class="overlay"></div>')
	});
	//pop up for login form
    loginLink.on('click', function(event){
    	event.preventDefault();
    	loginct.parents(overlay).addClass("openform");
		$(document).on('click', function(e){
		var target = $(e.target);
		if ($(target).hasClass("overlay")){
				$(target).find(loginct).each( function(){
					$(this).removeClass("openform");
				});
				setTimeout( function(){
					$(target).removeClass("openform");
				}, 350);
			}	
		});
    });
    //pop up for signup form
    signupLink.on('click', function(event){
    	event.preventDefault();
    	signupct.parents(overlay).addClass("openform");
		$(document).on('click', function(e){
		var target = $(e.target);
		if ($(target).hasClass("overlay")){
				$(target).find(signupct).each( function(){
					$(this).removeClass("openform");
				});
				setTimeout( function(){
					$(target).removeClass("openform");
				}, 350);
			}	
		});
    });