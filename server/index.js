const express = require('express');
const bodyParser = require('body-parser');
const port = 4501;

const app = express();

app.use( bodyParser.json() );


app.listen( port, () => { console.log("listening on port 4501"); } );