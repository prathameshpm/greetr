;
(function (global, $) {

    // 'new' Object
    var Greetr = function (firstName, lastName, gender, language) {
        return new Greetr.init(firstName, lastName, gender, language);
    };

    // Hidden within the scope of IIFE never accessible
    var supportedLangs = ['en', 'es'];

    // Gender
    var gendr = ['m', 'f'];

    // Greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola',
        m: 'sir',
        f: 'madam'
    };

    // Logger messages
    var logMessages = {
        m: {
            en: 'You are Logged in sir',
            es: 'Has iniciado sesión sir'
        },
        f: {
            en: 'You are Logged in madam',
            es: 'Está accedido a madam'
        }

    };

    // Prototype holds methods (helps save memory space)
    Greetr.prototype = {

        validate: function () {
            // Check that it is a valid language and gender
            // References the externally inaccessible supportedLangs and gendr within the closure
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
            if (gendr.indexOf(this.gender) === -1) {
                throw "Invalid Gender";
            }
        },

        // 'this' refers to the calling object at execution line
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        // Retrieve messages from the object by referring to properties using [] syntax
        greeting: function () {
            return greetings[this.language] + ' ' + this.fullName() + ' ' + greetings[this.gender];
        },

        // Chainable methods return their own containing object
        greet: function () {
            var msg = this.greeting();

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution line
            // makes the method chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.gender][this.language] + ': ' + this.fullName());
                console.log('-----------------------------------------------------------');
            }

            // makes chainable
            return this;
        },

        setLang: function (lang) {

            // Set the language
            this.language = lang;

            // Validate
            this.validate();

            // Make chainable
            return this;
        },

        setGend: function (gend) {

            // Set the Gender
            this.gender = gend;

            // Validate
            this.validate();

            // Make chainable
            return this;
        }

    };

    // The actual object is created here, allowing us to use 'new' object without calling new
    Greetr.init = function (firstName, lastName, gender, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.gender = gender || 'm';
        self.language = language || 'en';
        self.validate();

    }

    // The method to avoid using 'new' keyword is derived from jQuery
    Greetr.init.prototype = Greetr.prototype;

    // Attach our Greetr to the global object, and provide a shorthand 'G$'
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
