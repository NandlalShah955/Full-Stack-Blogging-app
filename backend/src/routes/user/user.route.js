const User = require("../../models/user.model");
const Getusers=require("../../controllers/user.controller")
const express = require("express");
const app = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer=require("nodemailer")
const Username=process.env.GMAIL_USERNAME
const password=process.env.GMAIL_PASSWORD





app.get("/", async (req, res) => {
  let allusers = await Getusers();
  return res.send(allusers);
});
app.post("/signup", async (req, res) => {
  const otp=Math.round(1000+Math.random()*9000)
  // console.log(otp)
  try {
    let users = await User.create({
      ...req.body,
   
   
   
    });
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: Username,
          pass: password
      }
  });
   transporter.sendMail({
    from: 'nandlalsaw7789@gmail.com', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Otp for registration", // Subject line
    text: " Here is your Otp", // plain text body
    html: `Otp is ${otp}`, // html body
  });
    res.send(users);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let users = await User.findOne({ email, password });
  if (users) {
    const token = jwt.sign(
      { id: users._id, name: users.name ,role:users.role},
      "SECRET1234",
      {
        expiresIn: "1 hour",
      });
      const refreshToken = jwt.sign({},"REFRESHSECRET",{expiresIn:"7 days"})
      return res.send({message:"Login successfully",token,refreshToken});
  } else {
return res.status(404).send("Invalid Crediatenals")  
}
});
app.post("/refresh", async(req, res)=>{
    const refershedtoken=req.headers["authorization"]
    if(!refershedtoken){
    
      return res.status(404).send("unauthorized")
    }
    else{
      try {
        const verification=jwt.verify(refershedtoken,"REFRESHSECRET")
        if(verification){
          const newtoken=jwt.sign({},"SECRET1234",{expiresIn:"1 hour"})
          return res.send({token:newtoken})
        }
      } catch (error) {
        res.status(404).send(error.message)
      }
    }
    })

    app.get("/:id",async(req,res) => {
        let id=req.params.id;
    //  We are taking token here from headers 
        const usetoken=req.headers["authorization"];
    //  We have changed headers to authorization in thunderclient and in value you have to put token also 
        if(!usetoken){
        return res.send("Unauthorized");
      }
      // THis line is used to verify user 
      try {
    
        const Verification=jwt.verify(usetoken,"SECRET1234")
       if(Verification){
    
         let token=await User.findById(id)
          res.send(token)
       }
    
      } catch (e) {
        return res.status(404).send("invalid token")
      }
     
       
    })
    
module.exports = app;
