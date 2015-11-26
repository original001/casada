$ ->
	$ '.js-path-button' 
		.click ->

			$ 'html, body'
				.animate
					scrollTop: 0
				, 1000
				, ->
					$ 'body'
						.addClass 'ov'
					$ '.js-letter-chair'
						.addClass 'show'
					$ '.js-land-caption'
						.fadeOut 400
					return

	$ '.js-expand-link'
		.click ->
			$(this).toggleClass 'expanded'
			$ '.js-expanded-block'	
				.toggleClass('hidden')