import express from 'express' 
import auth from '../middleware/auth.js'
const adminRouter = express.Router()
adminRouter.post('/subscribe-newsletter', subscribeNewsletter)
adminRouter.get('/all-subscribed-emails', auth, getAllEmails)


export default adminRouter;