// Requiring the previous file
var ritorno = require('./lol.js');

console.log('Sono qui');

ritorno();

// Declaring an object
var person = {
    name: "John",
    surname: "Snow",
    greet: function() {
        console.log('Hello ' + this.name + ' ' + this.surname);
    }
};

person.greet();

console.log(person['name'] + ' ' + person['surname'] + ' is a dick');