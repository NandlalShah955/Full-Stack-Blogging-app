require("dotenv").config()
const connect=require("./config/db")
const cors=require("cors")
const express=require('express')
const Userroute=require("./features/user/user.route")
const Postroute=require("./features/posts/post.route")
const passport=require("./config/google.auth")
const passportgit=require("./config/github.auth")
const app = express()
const PORT=process.env.PORT
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors())
app.use("/users",Userroute)
app.use("/posts",Postroute)
app.get('/',(req,res)=>res.send('hello'))

app.get("/auth/google",
passport.authenticate('google', { scope: ['profile'] }));

app.get("/auth/google/callback", 
passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

   
app.get('/auth/github',
passportgit.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
passportgit.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });




app.listen(PORT,async()=>{
try {
    await connect()
} catch (e) {
    res.status(404).send(e.message)
}
      console.log(`server started on port ${PORT}`)
})