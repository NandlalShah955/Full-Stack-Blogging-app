const mongoose=require("mongoose")
const userScehma=new mongoose.Schema({
    name: { type: String, required:true,},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number,min:20,max:90 ,required:true},
    gender: {type: String,enum:["Male","Female"]},
  },{
      versionKey:false,
})
const Users=mongoose.model("user",userScehma)
module.exports=Users