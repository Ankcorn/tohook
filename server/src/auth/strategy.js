const passportJWT = require("passport-jwt");
const passportLocal = require('passport-local');

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

function LoginStrategy(user) {
    return new LocalStrategy({ usernameField: 'email', passwordField: 'password'}, user.authenticate())
}

function AuthStrategy(user) {
    const getUser = (jwtPayload, cb) => 
        user.findById(jwtPayload.id)
            .then(user => cb(null, user))
            .catch(err => cb(err));
    return new JWTStrategy({ jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), secretOrKey: 'ILovePokemon'}, getUser)
}

module.exports = {
    AuthStrategy,
    LoginStrategy
}