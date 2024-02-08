const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const CovidRouter=require("./controller/CovidRouter")

//seting alias name
const app=express()

//setting middleware
app.use(express.json())
app.use(cors())

//connection
mongoose.connect("mongodb+srv://shamiltk02:shamiltk98@cluster0.7syqm.mongodb.net/covidDb?retryWrites=true&w=majority",{useNewUrlParser:true})

//routing
app.use("/api/covid",CovidRouter)

//setting port for localhost
app.listen(3001,()=>{
    console.log("Server is running....")
})