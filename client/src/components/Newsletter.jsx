import React from 'react'

const Newsletter = () => {
    return (
        <div className='h-[40vh] bg-base-300 flex items-center justify-center'>
            <div className="search-form">
                <h2 className='text-4xl uppercase font-bold text-center'>Subscribe to our newsletter</h2>
                <form className='flex my-6 justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                    <input required className=' text-gray-800 w-full pl-4 outline-none placeholder-gray-500' type='text' name='search' id='search' placeholder='Subscribe...' />
                    <button className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer ' type='submit'>SUBSCRIBE</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter