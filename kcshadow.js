// Wrap in IIFE to isolate from global space
(function (global, $) {

	var KCShadow = function(firstName, lastName, language) {
		return new KCShadow.init(firstName, lastName, language);
	}
	
	
	
	// Set prototype of new objects
	KCShadow.init.prototype = KCShadow.prototype;

	
	// Attach to global object, set up alias
	global.KCShadow = global.K$ = KCShadow;
	
	
}(window, jQuery));