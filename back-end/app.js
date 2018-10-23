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

/* @Per Andrea
    In Javascript come in molti altri linguaggi è possibile creare oggetti tramite 
    l'utilizzo di costruttori.
    N.B. anche in questo caso l'oggetto non è altro che una funzione. 
*/

// costruttore
function Persona(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

// creo il nuovo oggetto
var andrea = new Persona('Andrea', 'Gai');

// stampo una o più proprietà 
console.log(andrea.firstname);

/* Prototype: ogni oggetto in javascript ha prototype come attributo. Questo "prototype" è accessibile da ogni oggetto di 
    tipo Persona in questo caso.
    La cosa bella è che non devi per forza creare una nuova istanza nel costruttore ma lo puoi fare nel "prototype" e 
    avere accesso alla proprietà come se nulla fosse.
*/

Persona.prototype.saluto = function () {
    console.log('Ciao, ' + this.firstname + ' ' + this.lastname);
}

andrea.saluto();

// Posso quindi creare una nuova persona ed avere accesso a "saluto". TOPPE!
var alessandro = new Persona('Alessandro', 'Cavuoti');

alessandro.saluto();

/* Si capisce quindi che Persona.prototype è lo stesso sia per alessandro che per andrea. Se al primo colpo di debug 
non ti stampa il proto insisti, alla seconda dovrebbe stamparlo */
console.log(andrea.__proto__);
console.log(alessandro.__proto__);
console.log(andrea.__proto__ === alessandro.__proto__);

// creazione del server che genera Json dal quale andremo a prendere i dati per metterli nel frontend
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send('<html><head><body><h1>Ciao</h1></body></head></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'Alessandro', lastname: 'Cavuoti' });
});

app.get('/persona/:id', function (req, res) { 
    res.send('<html><head><body><h1>' + req.params.id + '</h1></body></head></html>');
 });

app.listen(port);