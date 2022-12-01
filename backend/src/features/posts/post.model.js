const mongoose=require("mongoose")
const postSchema=new mongoose.Schema({
title:{type:String,required:true},
image:{type:String,required:true},
description:{type:String,required:true},
category:{type:String,required:true},
})
const Posts=mongoose.model("post",postSchema)
module.exports=Posts