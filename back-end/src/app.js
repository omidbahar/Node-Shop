var express = require('express');
var app = express();
app.get('/', (req, res)=>{
    res.send(`<h1>Hello</h1>`);

});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`) );