import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'  

const BlogList = () => {
  const {axios,blogs} = useAppContext();
  const [blogData,setBlogData] = useState([]);
  const fetchBlogs = async()=>{
    setBlogData(blogs)
  }
  useEffect(()=>{
    fetchBlogs()
  },[])
  return (
    <div className='p-6 flex flex-col gap-10'>
      <div className="list-of-blogs">
        <h2 className='text-3xl text-bold mb-6'>All Blogs</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th className='xl:px-6'>#</th>
                <th>Blog Title</th>
                <th className='max-sm:hidden'>Date </th>
                <th className='max-sm:hidden'>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {blogData.map((item,index)=>{
                return (<BlogTableItem index = {index+1} key={item._id} bt_data = {item}/>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BlogList