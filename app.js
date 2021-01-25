const express = require('express'); // this imports the express module
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//middlewares
app.use(cors());
app.use(bodyParser.json());

//Middlewares
/*
app.use('/posts', () => {
   console.log('this is a middleware running');
});
*/

//Import Rules
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
//app.use('/user', userRoute);   //this is if you were to need another route to another page for example users page

//ROUTES
app.get('/', (req, res) => {
    res.send('we are on home yesterday');
});


// GET - GETS INFO
// POST - SENDS INFO
// DELETE - REMOVES AN ITEM
// PATCH - UPDATES AN ITEM

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
);


//HOW TO START LISTENING TO THE SERVER
app.listen(3000); //port is 3000
