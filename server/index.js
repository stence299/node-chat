const express = require('express');
const bodyParser = require('body-parser');
const mc = require(__dirname + '/controllers/messages_controller')
const port = 4501;

const app = express();

app.use( express.static( __dirname + '/../public/build'))
app.use( bodyParser.json() );

app.post( "/api/messages", mc.create);
app.get( "/api/messages", mc.read);
app.put( "/api/messages/:id", mc.create);
app.delete( "/api/messages/:id", mc.delete);


app.listen( port, () => { console.log("listening on port 4501"); } );