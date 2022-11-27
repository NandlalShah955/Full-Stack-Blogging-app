const User=require("./user.model")
const express=require("express")
const app=express.Router()

app.get("/",async(req,res)=>{
    let users=await User.find();
    res.send(users)
})
app.get("/signup",async(req,res)=>{
try {
     let users=await User.create({
        ...req.body,
     });
     res.send(token);
} catch (e) {
    res.status(404).send(e.message);
}
})
app.post("/login",async(req,res)=>{

})


module.exports=app