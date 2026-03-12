import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import BlogList from '../components/Home/BlogList'
const AllBlogs = () => {
    const [current, setCurrent] = useState('all')
  return (
    <>
        <Navbar />
        <BlogList current={current} setCurrent={setCurrent}/>
    </>
  )
}

export default AllBlogs