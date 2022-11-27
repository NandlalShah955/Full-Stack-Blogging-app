require("dotenv").config()

const express=require('express')

const app = express()
const PORT=process.env.PORT
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.get('/',(req,res)=>res.send('hello'))

app.listen(PORT,()=>{
  console.log(`server started on port ${PORT}`)

})