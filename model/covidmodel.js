const mongoose=require("mongoose")
const covidSchema=new mongoose.Schema(
    {
        Name: String,
    Mobile: String,
    Symptoms: String,
    Status: String,
    }
)
module.exports=mongoose.model("Patients",covidSchema)