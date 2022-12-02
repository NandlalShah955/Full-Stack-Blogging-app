import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Homepage() {
  const [posts, setposts] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
  const loadpost=async()=>{
 setloading(false)
 const res=await axios.get(
  "http://localhost:8080/posts"
 )
 setposts(res.data)
console.log(res)
 setloading(false)

  }
loadpost()

  }, [])
  
  
  
  
  
  
  return (
    <div>




    </div>
  )
}

export default Homepage