global.rootDir = __dirname ;
const path = require('path');
const express = require("express");
const routeHeaders = require("./api/Headers");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.use("/api/headers",routeHeaders);
app.use("/js",express.static(global.rootDir + "/js"));

//Bind connection to error event (to get notification of connection errors)
app.get('/', (req, res) => {
    res.sendFile(global.rootDir + "/index.html");
})

app.get('/test', (req, res) => {
  res.sendFile(global.rootDir + "/test/index.html");
})

app.listen(port, ()=>{
    console.log('listening on port '+port);
});