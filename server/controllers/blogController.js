import fs from 'fs'
import imageKit from '../configs/imageKit.js';
import { Blog } from '../models/Blog.js';
import Comment from '../models/Comment.js';
 export const addBlog = async (req, res) => {
    try {
        const { title, subtitle, description, category, isPublished } = JSON.parse(req.body.blog)
        const imageFile = req.file;
        if (!title || !subtitle || !description || !category || !imageFile) {
            return res.json({ success: false, message: 'Missing required fields' })
        }
        //Image upload with imageKit
        const fileBuffer = fs.createReadStream(imageFile.path)
        const response = await imageKit.files.upload({ 
            file: fileBuffer, 
            fileName: imageFile.originalname,
            folder: '/blogs',
        });
        // Image optimization with imagekit transformation
        const optimizedImageURL = imageKit.helper.buildSrc({
            urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
            src: response.filePath,
            transformation: [
                {
                    width: 400,
                    height: 300,
                    quality: 80,
                    format: 'webp',
                },
            ],
        }); 
        const image = optimizedImageURL;
        await Blog.create({title,subtitle,description,category,image,isPublished});
        fs.unlinkSync(imageFile.path);
        res.json({success:true, message: 'Blog added successfully'})
    }
    catch (error) {
        res.json({ success: false, message: `Error occured: ${error}` })
    }
}

export const getAllBlogs = async (req,res)=>{
    try{
         const blogs = await Blog.find({isPublished: true})
         if(!blogs){
            res.json({success:false,message:" No blog found in the databse"})
         }
         res.json({success:true, blogs})
    }
    catch(e){
        res.json({success: false, message: e.message})
    }
}
    
export const getBlogById = async (req,res)=>{
    try{
        const {blogId} = req.params
        const blog = await Blog.findById(blogId)
        if(!blog){
            return res.json({success: false, message: 'blog not found'})
        }
        res.json({success:true, blog})
    }
    catch(e){
        res.json({success: false, message: e.message})
    }
}

export const deleteBlogById = async (req,res)=>{
    try{
        const {id} = req.body
        const blog = await Blog.findByIdAndDelete(id)
        await Comment.deleteMany({blog:id})
        res.json({success:true, message: "blog deleted successfully"})
    }
    catch(e){
        res.json({success: false, message: e.message})
    }
}

export const togglePublish = async (req,res)=>{
    try{
        const {id} = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save()
        res.json({sucess: true, message: 'Status updated'})

    }
    catch(e){
        res.json({success: false, message: e.message})
    }
}

//now we need to create api endpoint in route.js

// Comment

export const addComment = async (req,res)=>{
    try{
    const {blog,name,content} = req.body;
    await Comment.create({blog,name,content})
    res.json({success: true, message: 'Comment added for review'})
    }
    catch(e){
        res.json({success: false, message: `Error found adding the comments: ${e.message}`})
    }
}
export const getBlogComments = async(req,res)=>{
    try{
        const {blogId} = req.body;
        const comments = (await Comment.find({blog: blogId, isApproved:true})).sort({createdAt: -1})
        res.json({sucess: true, comments})
    }
    catch(e){
        res.json({success: false, message: `Error found fetching the comments: ${e.message}`})
    }
}
