const User=require("../models/user.model")

async function Getusers(){
    const users=await User.find()
    return users
}
module.exports =Getusers