import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div onClick={()=>{navigate(`/blog/${item._id}`)}} className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={item.image}
                    alt={item.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.title}
                </h2>
                <p>{item.subTitle}</p>
                <div className="card-actions justify-end">
                    <div className="uppercase bg-orange-600 badge text-white">{item.category}</div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard