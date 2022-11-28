var GitHubStrategy = require('passport-github2').Strategy;
const passport=require("passport")
require('dotenv').config() 

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "https://localhost:8080/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  console.log(profile)
  }
  ));
  module.exports =passport