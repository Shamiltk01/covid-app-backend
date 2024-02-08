const mongoose=require("mongoose")


//creating schema with mongodb
const CovidSchema= mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:String,
        gender:String,
        phno:String,
        address:String,
        symptoms:String,
        status:{
            type:String,
            required:true
        }

    }
)

//exporting schema

module.exports=mongoose.model("Patients",CovidSchema)