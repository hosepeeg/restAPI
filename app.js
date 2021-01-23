const express = require('express') //this imports the express module
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
//MIDDLEWARES
/*
app.use('/posts', () => {
    console.log('this is a middleware running');
});
*/
//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
//app.use('/user', userRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send("we are home");
});


//app.get - GETS INFO
//app.post - SENDS INFO
//app.delete - REMOVES AN ITEM
//app.patch - UPDATES AN ITEM

//CONNECT TO DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log('connected to DB!')
);

//HOW TO START LISTENING TO THE SERVER
app.listen(3000) //port is 3000
