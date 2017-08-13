;
(function (global, $) {

    // 'new' Object
    var Greetr = function (firstName, lastName, gender, language) {
        return new Greetr.init(firstName, lastName, gender, language);
    }

    // Prototype holds methods (helps save memory space)
    Greetr.prototype = {};

    // The actual object is created here, allowing us to use 'new' object without calling new
    Greetr.init = function (firstName, lastName, gender, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.gender = gender || 'm';
        self.language = language || 'en';

    }

    // The method to avoid using 'new' keyword is derived from jQuery
    Greetr.init.prototype = Greetr.prototype;

    // Attach our Greetr to the global object, and provide a shorthand 'G$'
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
