import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { blog_data } from '../assets/assets'
import BlogSingle from '../components/BlogSingle'

const Blog = () => {
  const { id } = useParams()
  const [blogData, setBlogData] = useState([])
  console.log("id: ",id)
  console.log("blog data from asset: ",blog_data)


  const fetchBlogData = () => {
    const single_blog = blog_data.find((item) => {
      return item._id === id
    })
    setBlogData(single_blog)

  }
  useEffect(() => {
    fetchBlogData()
  }, [])

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