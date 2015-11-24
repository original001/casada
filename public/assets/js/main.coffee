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

	$ '.js-btn-form'
		.click (e) ->
			if validate()
				$ '.js-form-main, .js-letter'
					.removeClass 'show'

				$ '.js-loading'
					.show()

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

