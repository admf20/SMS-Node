require('dotenv').config();

const app = require('./server');
const http = require('http');

const server = http.createServer(app);

require('./database');
require('./socket').Connection(server);

app.listen(app.get('port'), ()=>{
    console.log('Servidor Corriendo ' + app.get('port'));
});