/**
 * Passport Configuration
 * (sails.config.passport)
 *
 * @module      :: Config
 * @description :: Configuration file for Passport
 */

var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

module.exports = {
  http: {
    customMiddleware: function(app){
      sails.log.info('Using Passport as Express Middleware');
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};
