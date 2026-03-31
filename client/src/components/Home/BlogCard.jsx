import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div 
  onClick={() => { navigate(`/blog/${item._id}`) }} 
  className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
>
  {/* Image Container with subtle zoom effect */}
  <figure className="relative aspect-[16/10] overflow-hidden">
    <img
      src={item.image}
      alt={item.title}
      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
    />
    {/* Floating Category Badge */}
    <div className="absolute top-4 left-4">
       <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white/90 backdrop-blur-md text-slate-800 rounded-full shadow-sm">
         {item.category}
       </span>
    </div>
  </figure>

  {/* Content Area */}
  <div className="p-6">
    <h2 className="text-xl font-semibold text-slate-800 leading-tight group-hover:text-teal-700 transition-colors duration-300">
      {item.title}
    </h2>
    
    <p className="mt-3 text-slate-500 text-sm line-clamp-2 leading-relaxed">
      {item.subTitle}
    </p>

    <div className="mt-6 flex items-center text-teal-600 text-sm font-medium">
      <span>Read Story</span>
      <svg 
        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>
</div>
    )
}

export default BlogCard