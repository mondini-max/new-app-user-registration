const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let corsOptions = {
    origin: "http://localhost:8001"
};

app.use(cors(corsOptions));

// Parse request of content-type _application/json

app.use(bodyParser.json());

//Parse request of content type  - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true}));

// simple route 
app.use('/', (req,res ) => {
    res.json({ message: " Bienvenue à Votre espace ou-vivre.org"});
});

//set port , llisten for request 

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log('Server is running on port ${PORT].');
    
})