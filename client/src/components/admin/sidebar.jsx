import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdDashboard, MdArticle, MdComment } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";


const sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>

        <NavLink end={true} to='/admin' className={(isActive)=>`flex items-center px-3 py-3 md:px-9 md:min-w-64 cursor-pointer gap-2 ${isActive && 'bg-primary/10 border-r-4 border-primary'}`
        }>
            <MdDashboard />
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>

        <NavLink to='/admin/add-post' className={(isActive)=>`flex items-center px-3 py-3 md:px-9 md:min-w-64 cursor-pointer gap-2 ${isActive && 'bg-primary/10 border-r-4 border-primary'}`
        }>
            <MdPostAdd />
            <p className='hidden md:inline-block'>Add a new Post</p>
        </NavLink>

        <NavLink to='/admin/blog-list' className={(isActive)=>`flex items-center px-3 py-3 md:px-9 md:min-w-64 cursor-pointer gap-2 ${isActive && 'bg-primary/10 border-r-4 border-primary'}`
        }>
            <MdArticle />
            <p className='hidden md:inline-block'>List of Blogs</p>
        </NavLink>

        <NavLink to='/admin/comments' className={(isActive)=>`flex items-center px-3 py-3 md:px-9 md:min-w-64 cursor-pointer gap-2 ${isActive && 'bg-primary/10 border-r-4 border-primary'}`
        }>
            <MdComment />
            <p className='hidden md:inline-block'>Comments</p>
        </NavLink>
    </div>
  )
}

export default sidebar