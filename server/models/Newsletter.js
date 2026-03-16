import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({ // creates db schema
    email: { type: String, required: true },
}, { timestamps: true })

export const Blog = mongoose.model('Newsletter', NewsletterSchema) //creates a new model named 'blog' using the blogSchema and store to the variable Blog