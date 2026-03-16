import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { Blog } from '../models/Blog.js';
import Comment from '../models/Comment.js';
export const adminLogin = async (req, res) => {
    //Generating tokens from jwt
    try {
        const { email, password } = req.body;
        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: 'Invalid credential' })
        }
        const token = jwt.sign({ email }, process.env.JWT_SECRET)
        return res.json({ success: true, token })
    }
    catch (err) {
        return res.json({ success: false, message: err.message })

    }
}   

export const getAllblogsAdmin = async (req,res)=>{
    try{
        const blogs = await Blog.find({}).sort({createdAt: -1}) 
        res.json({success:true, blogs})
    }
    catch (err) {
        return res.json({ success: false, message: err.message })

    }
}
export const getAllComments = async (req,res)=>{
    try{
        const comments = await Comment.find({}).populate("blog").sort({createdAt: -1})
        return res.json({success:true, comments}) 
    }
    catch (err) {
        return res.json({ success: false, message: err.message })

    }
}

export const getDashboard = async (req,res)=>{
    try{
        const recentBlogs = await Blog.find({}).sort({createdAt: -1}).limit(5);
        const number_of_blogs = await Blog.countDocuments();
        const number_of_comments = await Comment.countDocuments();
        const drafts = await Blog.countDocuments({isPublished:false})

        const dashboardData = {recentBlogs,number_of_blogs,number_of_comments,drafts}
        return res.json({success:true, dashboardData}) 

    }
    catch(e){
        return res.json({ success: false, message: err.message })
    }
}

export const deleteCommmentById = async (req,res)=>{
    try{
        const {id} = req.body;
        await Comment.findByIdAndDelete(id);
        return res.json({success:true, message: "Comment deleted sucessfully"})
    }
    catch(e){
        return res.json({ success: false, message: err.message + 'Error' })

    }
}
export const approveCommmentById = async (req,res)=>{
    try{
        const {id} = req.body;
        await Comment.findByIdAndUpdate(id, {isApproved: true});
        return res.json({success:true, message: "Comment approved sucessfully"})
    }
    catch(e){
        return res.json({ success: false, message: err.message })

    }
}