import express from 'express'
import {addBlog, deleteBlogById, getAllBlogs, getBlogById, togglePublish}  from '../controllers/blogController.js';
import upload from '../middleware/upload.js'; //middleware to parese the uploaded image before adding in db
import auth from '../middleware/auth.js'
//created the router
const blogRouter = express.Router();
//attach controller 
blogRouter.post('/add', upload.single('image') ,auth,addBlog)
blogRouter.get('/all', getAllBlogs)
blogRouter.get('/:blogId', getBlogById)
blogRouter.post('/delete',auth, deleteBlogById) // added auth middleware so that we can p[proetect the route
blogRouter.post('/toggle-publish', auth,togglePublish)


export default blogRouter;