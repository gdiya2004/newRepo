import {User} from "../model/user-model.js"
export const getAllUsers=async(req,res)=>{
try{
    const users=await User.find();
    console.log(users);
    if(!users || users.length===0){
        return res.status(404).json({message:"No users found"})
    }
    return res.status(200).json(users);
}catch(error){
    next(error);
}
}