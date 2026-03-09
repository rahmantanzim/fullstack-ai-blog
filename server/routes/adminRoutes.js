import express from 'express' 
import { adminLogin,getAllblogsAdmin ,getAllComments,getDashboard,deleteCommmentById,approveCommmentById} from '../controllers/adminController.js'
import auth from '../middleware/auth.js'
const adminRouter = express.Router()
adminRouter.post('/login', adminLogin)
adminRouter.get('/all-blogs', auth, getAllblogsAdmin)
adminRouter.get('/all-comments', auth, getAllComments)
adminRouter.get('/dashboard', auth, getDashboard)
adminRouter.post('/delete-comment', auth, deleteCommmentById)
adminRouter.post('/approve-comment', auth, approveCommmentById)

export default adminRouter;