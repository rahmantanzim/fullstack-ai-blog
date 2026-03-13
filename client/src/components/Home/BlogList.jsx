import React from 'react'
import { categories } from '../../assets/data'
import { blog_data } from '../../assets/assets'
import BlogCard from './BlogCard'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
const BlogList = ({current,setCurrent}) => {
    const {blogs,input} = useAppContext();
    const filteredBlogs= ()=>{
        if(input.length === 0){
            return blogs;
        }
        return blogs.filter(blog=> blog.title.toLowerCase().includes(input.toLowerCase()))
    }
    return (
        <div>
        <section  className='min-h-[100vh] flex flex-grow-1 gap-4 flex-col  items-center py-8 px-4 bg-base-500'>
            <div className="blog-categories flex gap-8">
                {categories.map((item) => {
                    return <div key={item} onClick={() => { setCurrent(item) }} className={`text-[18px] cursor-pointer rounded category capitalize ${current === item && 'bg-primary text-white px-4'}`}>
                        {item}
                    </div>
                })}
            </div>
            <div className="blog-card cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 m-8 sm:mx-16 ">
                {
                    filteredBlogs().filter((blog) => current === 'all' ? true : blog.category === current).map((item) => {
                        return (
                            <BlogCard key={item._id} item={item} />
                        )
                    })
                }


            </div>
        </section>
        </div>
    )
}

export default BlogList