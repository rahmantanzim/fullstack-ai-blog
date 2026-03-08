import fs from 'fs'
import imageKit from '../configs/imageKit.js';
import { Blog } from '../models/Blog.js';
 export const addBlog = async (req, res) => {
    try {
        const { title, subtitle, description, category, isPublished } = JSON.parse(req.body.blog)
        const imageFile = req.file;
        // console.log('Image file: ',imageFile)
        if (!title || !subtitle || !description || !category || !imageFile) {
            return res.json({ success: false, message: 'Missing requied fields' })
        }
        //Image upload with imageKit
        const fileBuffer = fs.readFileSync()
        const response = await imageKit.files.upload({ 
            file: fs.createReadStream(imageFile.path), 
            fileName: imageFile.originalname,
            folder: '/blogs',
        });
        // Image optimization with imagekit transformation
        const optimizedImageURL = imageKit.helper.buildSrc({
            urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
            src: response.filepath,
            transformation: [
                {
                    width: 400,
                    height: 300,
                    crop: 'maintain_ratio',
                    quality: 80,
                    format: 'webp',
                },
            ],
        }); 
        const image = optimizedImageURL;
        Blog.create({title,subtitle,description,category,image,isPublished})
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
        const blog = await blog.findById(blogId)
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
        const blog = await blog.findByIdAndDelete(id)
        res.json({success:true, message: "blog deleted successfully"})
    }
    catch(e){
        res.json({success: false, message: e.message})
    }
}

export const togglePublish = async ()=>{
    try{
        const id = req.body({id});
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save()
        res.json({sucess: true, message: 'Status updated'})

    }
    catch(e){
        res.json({success: false, message: e.message})
    }
}

//now we need to create apir endpoint in route.js