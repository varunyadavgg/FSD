const mangoose=require("mongoose")


const s1=new mangoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        tech:{
            type:String,
            required:true
        },
        section:{
            type:String,
            required:true
        }



    }
)



module.exports = mangoose.model("schema1",s1)