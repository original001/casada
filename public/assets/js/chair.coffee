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
					return
