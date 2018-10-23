// Requiring the previous file
var ritorno = require('./lol.js');

console.log('Sono qui');

ritorno();

// Declaring an object
var person = {
    name: "John",
    surname: "Snow",
    greet: function () {
        console.log('Hello ' + this.name + ' ' + this.surname);
    }
};

person.greet();

console.log(person['name'] + ' ' + person['surname'] + ' is a dick');

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
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' }
        );
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end('NO');
    }

}).listen(1337, '127.0.0.1');