const Post=require("./post.model")
const express= require("express")
const app=express.Router()


app.get("/",async(req,res)=>{
    let posts= await Post.find()
    res.send(posts)
})

// app.post("/upload",async(req,res)=>{
// try {
//     let posts=await Post.create({
//         ...req.body,
//     })
//     res.send(posts)
// } catch (e) {
//     res.status(404).send(e.message)
// }
// })

// app.patch("/:id/updatepost",async(req,res)=>{
// let id = req.params.id
// try {
//     let posts=await Post.findByIdAndUpdate(
//         id,
//         {
//             ...req.body

//     },
//     {
//         new: true,
//     }
    
//     )
//     res.send(posts,'Post updated Successfully')
// } catch (e) {
//     res.status(404).send(e.message)
// }
// })

// app.delete("/:id/deletepost",async(req,res)=>{
// let id= req.params.id
// try {
//     let posts=await Post.findByIdAndDelete(id)
//     if(posts){
// res.send("Post Deleted Successfully")
//     }else{
//         res.send("Cannot delete non-existing post")
//     }
// } catch (e) {
//     res.status(404).send(e.message)
// }
// })





module.exports =app