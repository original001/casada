$ ->
	$ '.js-path-button' 
		.click ->
			$ '.js-chair-letter, .js-about-form'
				.addClass 'show fixed'

			$ 'html, body'
				.animate
					scrollTop: 0
				, 1000