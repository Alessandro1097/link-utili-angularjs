var bodyParser = require('body-parser');
var fs = require('fs');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fileName = 'name.json';
var filePath = './controllers/' + fileName;
var file = require('./' + fileName);

module.exports = function (app) {

	app.get('/', function (req, res) {
		res.render('index');
	});

	app.get('/person/:id', function (req, res) {
		res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
	});

	app.post('/person', urlencodedParser, function (req, res) {
		res.send('Thank you!');
		console.log('Name: ' + req.body.firstname);
		console.log('Surname: ' + req.body.lastname);
		file.name = req.body.firstname;
		file.lastname = req.body.lastname;
		console.log('Precedente: ' + JSON.stringify(file));
		
		fs.writeFile(filePath, JSON.stringify(file), function (req, err) {
			if (err) return console.log(err);
			console.log('Nuovo: ' + JSON.stringify(file, null, 2));
			console.log('writing to ' + filePath);
		});
	});
}