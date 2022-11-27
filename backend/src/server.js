require("dotenv").config()
const connect=require("./config/db")
const express=require('express')
const Userroute=require("./features/user/user.route")
const app = express()
const PORT=process.env.PORT
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use("/user",Userroute)
app.get('/',(req,res)=>res.send('hello'))

app.listen(PORT,async()=>{
try {
    await connect()
} catch (e) {
    res.status(404).send(e.message)
}


      console.log(`server started on port ${PORT}`)

})