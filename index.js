global.rootDir = __dirname ;  //global directory
const express = require("express");

//Param for creating the main application
const app = express();
const port = process.env.PORT || 8000;

//Welcome page
app.get('/', (req, res) => {
  res.sendFile(global.rootDir + "/index.html");
})

//Endpoint for visualize headers
app.get('/test', (req, res) => {
  res.send(JSON.stringify(req.headers));
})

//Start listening 
app.listen(port, ()=>{
    console.log('listening on port '+port);
});