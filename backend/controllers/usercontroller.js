const User =require("../models/User")


const getData =async(req,res,next)=>{

    const user = new User({
        name: req.body.name,
       
    })
    console.log(user)
   
     await user.save().then(data => {
       res.send(data)
    }).catch(error=>{

        res.json({
            message:"Not save name"
        })
        console.log(error)
    
    })

}
const AddUser =async(req,res,next)=>{
    let user = await User.findOne({user:req.body.name});
     res.send(user)
}
module.exports={
 AddUser:AddUser,
  getData:getData
}