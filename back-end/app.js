// Requiring the previous file
var ritorno = require('./lol.js');

console.log('Sono tornato alla pagina app.js');

ritorno();

// Declaring an object
var person = {
    name: "John",
    surname: "Snow",
    wife: {
        name: "Daenerys",
        surname: "Targaryen",
        fullname: function() {
            return this.name + ' ' + this.surname;
        }
    },
    printGreet: function() {
        console.log('Hello ' + this.name + ' ' + this.surname);
    }
};

person.printGreet();

console.log(person['name'] + ' ' + person['surname'] + ' is a dick');

console.log('His wife is ' + person.wife.fullname());