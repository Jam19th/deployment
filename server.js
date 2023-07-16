// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//Index route
app.get('/', (req, res) => {
    res.send('Hello World');
})

//Listen to port
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
)

//Export app
module.exports = app;