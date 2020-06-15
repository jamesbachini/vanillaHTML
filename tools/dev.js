const express = require('express');
const http = require('http');
const path = require('path');
const reload = require('reload');
const bodyParser = require('body-parser');
const logger = require('morgan');
const watch = require('watch');
const fs = require('fs');
const opn = require('opn');

const app = express();
 
let publicDir = path.join(__dirname, '../html');

if (process.argv[2] && process.argv[2] === 'docs') {
	publicDir = path.join(__dirname, '../docs');
}
 
app.set('port', process.env.PORT || 82);
app.use(logger('dev'));
app.use(bodyParser.json()); // Parses json, multi-part (file), url-encoded
app.get('/', (req, res) => {
	fs.readFile(publicDir+'/index.html', 'utf8', (err, data) => {
		const indexHTML = data.split('</head>').join('<script src="/reload/reload.js"></script></head>');
		res.send(indexHTML)
	});
});
app.use('/', express.static(publicDir));
 
const server = http.createServer(app);
 
reload(app).then((reloadReturned) => {
	watch.watchTree(publicDir, function (f, curr, prev) {
		reloadReturned.reload();
	});
	server.listen(app.get('port'), function () {
		console.log(`Server Ready: http://localhost:${app.get('port')} Starting default browser...`);
		opn(`http://localhost:${app.get('port')}`);
	})
}).catch(function (err) {
	console.error('Reload could not start, could not start server', err);
});
