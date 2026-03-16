import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { blog_data } from '../assets/assets'
import BlogSingle from '../components/BlogSingle'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
const Blog = () => {
  const { id } = useParams()
  const [blogData, setBlogData] = useState(null)
  const {axios} = useAppContext();

  useEffect(() => {
    if (!id) return;

    const fetchBlogData = async () => {
      try {
        const { data } = await axios.get(`/api/blog/${id}`)
        
        if (data.success) {
          setBlogData(data.blog)
        } else {
          toast.error(data.message)
        }
      } catch (err) {
        toast.error("Failed to fetch blog data")
      }
    }

    fetchBlogData()
  }, [id, axios])

  return (
    <>
      <Navbar />
      {blogData ? (
        <BlogSingle data={blogData}/>
      ) :
        <h2>No Blog found</h2>
      }

    </>
  )
}

export default Blog