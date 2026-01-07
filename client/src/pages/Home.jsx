import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Home/Header'
import BlogList from '../components/Home/BlogList'
import Newsletter from '../components/Newsletter'
const Home = () => {
    const [current, setCurrent] = useState('all')
    return (
        <>
            <Navbar />
            <Header />
            <BlogList current={current} setCurrent={setCurrent}/>
            <Newsletter/>
        </>
    )
}

export default Home