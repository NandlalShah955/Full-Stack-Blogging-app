require("dotenv").config()
const connect=require("./config/db")
const express=require('express')
const Userroute=require("./features/user/user.route")
const passport=require("./config/google.auth")
const app = express()
const PORT=process.env.PORT
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use("/user",Userroute)
app.get('/',(req,res)=>res.send('hello'))

app.get("/auth/google",
passport.authenticate('google', { scope: ['profile'] }));

app.get("/auth/google/callback", 
passport.authenticate('google', { failureRedirect: '/login' }),
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