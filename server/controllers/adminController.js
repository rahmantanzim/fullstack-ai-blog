import 'dotenv/config'
import jwt from 'jsonwebtoken'
export const adminLogin = async (req, res) => {
    try {
        console.log("ENV CRED", ADMIN_EMAIL)
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