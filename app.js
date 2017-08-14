// Gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('Jane', 'Smith');

// Use our chainable methods
g.greet().setLang('es').setGend('f').greet().log();
g.greet().setLang('en').setGend('f').greet().log();
