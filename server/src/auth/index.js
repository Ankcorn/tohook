const auth = require('./auth.routes');
const { LoginStrategy, AuthStrategy } = require('./strategy');

function useJwtAuth(passport, mongooseModel) {
    passport.use(LoginStrategy(mongooseModel));
    passport.serializeUser(mongooseModel.serializeUser());
    passport.deserializeUser(mongooseModel.deserializeUser());
    passport.use(AuthStrategy(mongooseModel));
    return { auth, protection: () => passport.authenticate('jwt', { session: false }) }
}

module.exports = useJwtAuth