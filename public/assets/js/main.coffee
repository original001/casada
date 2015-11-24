$ ->
	$ '.js-link'
		.click (e) ->
			$(this).fadeOut(400)
			$ '#page'
				.addClass 'form'
	
			$ '.js-form-main, .js-letter'
				.addClass 'show'

	$ '.js-form-close'
		.click (e) ->
			$('.js-link').fadeIn(400)
			$ '#page'
				.removeClass 'form'
	
			$ '.js-form-main, .js-letter'
				.removeClass 'show'
