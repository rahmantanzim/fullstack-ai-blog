import React from 'react'
import { categories } from '../../assets/data'
import { blog_data } from '../../assets/assets'
import BlogCard from './BlogCard'
import { useNavigate } from 'react-router-dom'
const BlogList = ({current,setCurrent}) => {
    return (
        <section  className='min-h-[100vh] flex gap-10 flex-col justify-center items-center py-10 bg-base-500'>
            <div className="blog-categories flex gap-8">
                {categories.map((item) => {
                    return <div key={item} onClick={() => { setCurrent(item) }} className={`text-[18px] cursor-pointer rounded category capitalize ${current === item && 'bg-primary text-white px-4'}   `}>
                        {item}
                    </div>
                })}
            </div>
            <div className="blog-card cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8  mx-8 sm:mx-16 ">
                {
                    blog_data.filter((blog) => current === 'all' ? true : blog.category === current).map((item) => {
                        return (
                            <BlogCard key={item._id} item={item} />
                        )
                    })
                }


            </div>
        </section>
    )
}

export default BlogList