// Gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('Jane', 'Smith');

// Use our chainable methods
g.greet().setLang('es').setGend('f').greet().log();
g.greet().setLang('en').setGend('f').greet().log();

// Let's use our object on the click of the submit button
$('#submit').click(function () {

    // Create a new greeter object (For demo purposes, used predefined parameters)
    var grtr;
    if (($('#gender').val()) === 'm') {
        grtr = G$('John', 'Smith');
    } else if (($('#gender').val()) === 'f') {
        grtr = G$('Jane', 'Smith');
    }

    // Hide the login from the screen
    $('#submitDiv').hide();

    // fire off an HTML greeting, passing the #greeting as the selector and the chosen language, and log the welcome as well
    grtr.setLang($('#lang').val()).setGend($('#gender').val()).htmlGreeting('#greeting').log();
});
