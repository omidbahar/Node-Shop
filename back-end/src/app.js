const express = require('express');
const bodyParser = require('body-parser'); //for using JSON data very easily
const cors = require('cors'); //CORS allows you to configure the web API's security.
const morgan = require('morgan'); //log generator

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res)=>{
    res.send(`<h1>Hello</h1>`);

});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`) );