import {Newsletter} from '../models/Newsletter.js'

export const subscribeNewsletter = async (req,res)=>{
    try{
        const {email} = req.body
        if(!email){
            return res.json({success:false, message:"Email is required"})
        }
        const existingEmail = await Newsletter.findOne({email})
        if(existingEmail){
            return res.json({success:false, message:"This email is already subscribed to the newsletter"})
        }
        await Newsletter.create({email})
        res.json({success:true, message:"Subscribed to newsletter successfully"})
    }
    catch(e){
        res.json({success: false, message: e.message})
    }
}

export const getAllEmails = async (req,res)=>{
    try{
         const email = await Newsletter.find({})
         if(!email){
            res.json({success:false,message:" No email found in the database"})
         }
         res.json({success:true, email})
    }
    catch(e){
        res.json({success: false, message: 'msg' + e.message})
    }
}
