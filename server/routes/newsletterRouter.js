import express from 'express' 
import auth from '../middleware/auth.js'
import { subscribeNewsletter, getAllEmails } from '../controllers/newsletterController.js'
const newsletterRouter = express.Router()
newsletterRouter.post('/subscribe-newsletter', auth, subscribeNewsletter)
newsletterRouter.get('/all-subscribed-emails', auth, getAllEmails)


export default newsletterRouter;