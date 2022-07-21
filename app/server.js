const express = require("express")
const path = require("path")

const app = express()

app.get("/",(req,res)=>{
	res.send("Hello from express docker")	
})


const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
	console.log(`Listening on port ${PORT}`)
})
