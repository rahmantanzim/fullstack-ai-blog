import React, { useRef } from 'react'
import { useAppContext } from '../../context/AppContext';
const Header = () => {
    const {input,setInput} = useAppContext();
    const InputRef = useRef();
    const submitHandler = (e)=>{
        e.preventDefault();
        setInput(InputRef.current.value);
    }
    const clearHandler = ()=>{
        setInput('');
        InputRef.current.value = '';
    }
  return (
    <div className="slider h-[80vh] flex items-center justify-center bg-base-300">
                <div className="flex flex-col text-center">
                    <div className="upper-text">
                        <p className='w-max mx-auto bg-orange-600 text-white px-6 py-2 rounded-lg'>AI Feature integrated</p>
                    </div>
                    <div className="main-text">
                        <h2 className='text-4xl font-bold my-10'>A blogging platform with <span className='text-primary'>MERN</span> Stack</h2>
                        <p className='text-sm px-6 py-3 mx-auto mb-10 bg-opacity-80 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab tempore aliquid, nemo nisi sequi vel reprehenderit atque necessitatibus explicabo, repudiandae deserunt nobis. <br /> Magnam aspernatur quae placeat sequi omnis cupiditate?</p>
                    </div>
                    <div className="search-form">
                        <form onSubmit={submitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                            <input ref={InputRef} required className=' text-gray-800 w-full pl-4 outline-none placeholder-gray-500' type='text' name='search' id='search' placeholder='Search blogs...' />
                            <button className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer ' type='submit'>Search</button>
                        </form>
                        {input && <button className='px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer' onClick={clearHandler}>X Clear Search</button>}
                    </div>
                </div>
            </div>
  )
}

export default Header