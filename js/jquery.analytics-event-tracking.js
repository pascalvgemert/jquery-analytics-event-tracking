/*
 * jQuery Analytics Event Tracking
 *
 * Simplified BSD License 
 * @author        Pascal van Gemert
 * @copyright     (c) 2013 Pascal van Gemert
 * Usage Command Line: $('body').analyticsEventTracking()
 * @version 0.1.0
 * @requires jQuery 1.7+
 */

(function($) 
{
    $.fn.analyticsEventTracking = function(options) 
    {
        var settings = $.extend({
            selector:  		    '.track',
            default_category: 	'General'
        }, options);

        if(typeof ga !== 'function')
    	{
    		log('Google Analytics (analytics.js) is not initialized.');
    		return false;
    	}

        return $(this).each(function() 
        {
        	var _self = $(this);

        	bindEvents();

            function bindEvents()
            {
				_self.find(settings.selector).on('click', function(e)
				{
					trackEvent('click', $(this));
				});

				_self.find(settings.selector + '-blur').on('blur', function(e)
				{
					_this.trackEvent('blur', $(this));
				});

				_self.find(settings.selector + '-focus').on('focus', function(e)
				{
					_this.trackEvent('focus', $(this));
				});

				_self.find(settings.selector + '-mouseover').on('mouseover', function(e)
				{
					_this.trackEvent('mouseover', $(this));
				});
			};

			function trackEvent(event_type, element)
			{
				var category 	= element.data('category') || settings.default_category;
				var action 		= element.data('action') || interaction;
				var label 		= element.data('label') || ''; // optional
				var value 		= element.data('value') || 1; // optional

				ga('send', 'event', category, action, label, value);
			}
        });

		function log(message)
		{
			if(typeof console === 'object')
			{
				console.log(message);
			}
		}
    }
}(jQuery));
