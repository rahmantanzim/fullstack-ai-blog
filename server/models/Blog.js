import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({ // creates db schema
    title: { type: String, required: true },
    subTitle: { type: String },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    isPublished: { type: Boolean, required: true },
}, { timestamps: true })

export const Blog = mongoose.model('blog', blogSchema) //creates a new model named 'blog' using the blogSchema and store to the variable Blog