const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const useJwtAuth = require('./auth');
const User = require('./db/user.model');
const passport = require('passport');

require('./db/init')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(passport.initialize())

const { auth, protection } = useJwtAuth(passport, User)

app.use('/auth', auth);

app.get('/user', protection(), (req,res) => {
    res.send(`<h1> Hello ${req.user.username} </h1>`)
});

app.listen(4000, () => {
    console.log('server started on port 4000')
})