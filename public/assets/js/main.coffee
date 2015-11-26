$ ->
	routing = ['africa','kalifornia','arctica','bagami','baikal','laplandia']

	$ window
		.load ->
			$('.js-loader').fadeOut(600);
			HYPE.documents['map'].startTimelineNamed('map animation', HYPE.documents['map'].kDirectionForward);

	$ 'body'
		.on 'load.loader', ->
			random = Math.round(Math.random() * (routing.length - 1))

			window.location.href = "place_#{routing[random] || 'africa'}.html"

	$ '.js-link'
		.click (e) ->
			$ '#page'
				.addClass 'form'
	
			$ '.js-form-main, .js-letter'
				.addClass 'show'

	$ '.js-form-close'
		.click (e) ->
			$ '#page'
				.removeClass 'form'
	
			$ '.js-form-main, .js-letter'
				.removeClass 'show'

	$ '.js-btn-form'
		.click (e) ->
			if validate()
				$ '.js-link, .js-map'
					.fadeOut(400);

				$ '.js-form-main, .js-letter'
					.removeClass 'show'

				$ '.js-loading'
					.show()

				### function from hype ###
				HYPE.documents['loader'].startTimelineNamed('animation', HYPE.documents['loader'].kDirectionForward);

	validate = ->
		isValid = true
		options = $('.js-form-main').find('.js-option')

		options.each (ind, elem) ->		
			$this = $(this)
			if $this.find('input').length && !$this.find('input').val()
				$this.find('.js-popup-error').addClass('show')
				isValid = false
				return
			else if $this.find('.js-radio').length && !$this.find('.js-radio.active').length
				$this.find('.js-popup-error').addClass('show')
				isValid = false
				return
			else 
				$this.find('.js-popup-error').removeClass('show')

		return isValid

