import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({ // creates db schema
    email: { type: String, required: true },
}, { timestamps: true })

export const Newsletter = mongoose.model('Newsletter', NewsletterSchema) //