const express=require("express")
const CovidModel=require("../model/CovidModel")

const router=express.Router()


router.post("/add",async (req,res)=>{
    let data=req.body
    let Patient=new CovidModel(data)
    let result=await Patient.save()
    res.json({status:"success"})

})


router.get("/view",async(req,res)=>{
    let data=await CovidModel.find()
    res.json(data)
})


router.post("/search",async(req,res)=>{
    let input=req.body
    let result=await CovidModel.find(input)
    res.json(result)
})

module.exports=router


