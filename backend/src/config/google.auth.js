var GoogleStrategy = require('passport-google-oauth20').Strategy;

const passport=require("passport")
require('dotenv').config() 
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
   
},
  
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, profile);
    // });
    return cb(null, "profile")
  console.log(profile)
  }
));



module.exports =passport