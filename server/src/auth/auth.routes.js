const { Router } = require('express');
const tcomb = require('tcomb');
const validate = require('tcomb-validation-middleware');
const User = require('../db/user.model');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = new Router();

const user = tcomb.struct({
  email: tcomb.String,
  password: tcomb.String
});

router.post('/register', validate(user), async (req, res) => {
  try {
    const user = await User.register(new User({ username: req.body.email }), req.body.password);
    await user.save();
    return res.send('Successfully created new account');
  } catch (err) {
    return res.status(500).send('An error occurred: ' + err);
  }
});

router.post('/login', validate(user), passport.authenticate('local', { session: false }), (req, res) => {
  const { id, username } = req.user;
  req.login(user, { session: false }, err => {
    if (err) return res.status(403).send(err);
    const token = jwt.sign({ id, email: username }, 'ILovePokemon');
    return res.send({ user: username, token });
  });
});

module.exports = router;
