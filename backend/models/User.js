const mongoose=require('mongoose')

const Userchema =new mongoose.Schema({
    name:{
        type:String
    }
  
})
module.exports=mongoose.model("user",Userchema)