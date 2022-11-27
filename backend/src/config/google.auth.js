var GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const UserModel = require("../features/user/user.model");
require("dotenv").config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
    },

    function (accessToken, refreshToken, profile, cb) {
      let email = profile.json.email;
      const user = new UserModel({
        email,
        password: "wefsdfsd",
      });
      return cb(null, user);

      console.log(profile);
    }
  )
);
module.exports = passport;
