// Wrap in IIFE to isolate from global space
;(function (global, $) {

	var KCShadow = function(firstName, lastName, language) {
		return new KCShadow.init(firstName, lastName, language);
	}
	
	// Local variables - hidden to outside environment,
	// but available to inner functions due to closure
	var supportedLangs = ['en', 'es'];
	
	// Local objects (accessible using dot operator by name)
	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};
	
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};
	
	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};
	
	
	// Object prototype definitions (exposed to outside)
	KCShadow.prototype = {
		
		fullName: function () {
			return this.firstName + ' ' + this.lastName;
		},
		
		validate: function () {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid language";
			}
		},
		
		greeting: function () {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},
		
		formalGreeting: function() {
			return formalGreetings[this.language] + ', ' + this.fullName();
		},
		
		greet: function(formal) {
			var msg;
			
			// if undefined or null it will be coerced to 'false'
			if (formal) {
				msg = this.formalGreeting();
			}
			else {
				msg = this.greeting();
			}
			
			if (console) {
				console.log(msg);
			}
						
			// 'this' refers to the calling object at execution time
			// makes the method chainable
			return this;					
		},
		
		log: function() {
			if (console) {
				console.log(logMessages[this.language] + ' : ' +
						   this.fullName());
			}
			return this;
		},
		
		setLang: function (lang) {
			this.language = lang;
			this.validate();
			return this;
		},
		
		HTMLGreeting: function(selector, formal) {
			if (!$) {
				throw 'jQuery not loaded';
			}
			if (!selector) {
				throw ' Missing jQuery selector';
			}
			
			var msg;
			if (formal) {
				msg = this.formalGreeting();
			}
			else {
				msg = this.greeting();
			}
			
			$(selector).html(msg);
			return this;			
		}
		
	};
	
	
	// Initialize function for new objects
	KCShadow.init = function(firstName, lastName, language) {
		
		var self = this;
		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language = language || 'en';
		
		self.validate();
	}
	
	// Set prototype of new objects
	KCShadow.init.prototype = KCShadow.prototype;

	
	// Attach to global object, set up alias
	global.KCShadow = global.$K = KCShadow;
	
	
}(window, jQuery));