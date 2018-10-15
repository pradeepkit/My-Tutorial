const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
// const cors = require('cors');
// const passport = require('passport');
// const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const config = require('./config/database');
// require('./config/passport')(passport);


mongoose.connect(config.database);

mongoose.connection.on('connected', () =>{
    console.log('Connected to database: '+config.database);
});

//Database Connection Error
mongoose.connection.on('error', (err) =>{
    console.log('Database errer : '+err);
});

const app = express();

const users = require('./routes/users');
const port = process.env.PORT || 8080;

// CORS Middleware

app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200'],
  credentials:true
}));

// Set static files
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send("hello friend");
})

// Start Server
app.listen(port, () => {
    console.log('server start at port '+port)
});
