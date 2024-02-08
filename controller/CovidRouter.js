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

module.exports=router


