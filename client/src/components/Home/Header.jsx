import{ useRef } from 'react'
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
    <div className="slider h-[80vh] flex items-center justify-center bg-primary/10">
                <div className="flex flex-col text-center">
                    <div className="upper-text">
                        <p className='w-max mb-8 mx-auto bg-teal-600 text-white px-6 py-2 rounded-lg'>AI Feature integrated</p>
                    </div>
                    <div className="main-text">
            <h2 className="text-4xl md:text-7xl font-extrabold text-base-content tracking-tight mb-6 leading-tight">
                The Intelligent <span className="text-primary">MERN</span> Blogging Platform
            </h2>
            
            <p className="px-4 text-sm md:text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed mb-10">
                Publish faster and smarter. A full-stack blogging engine featuring an integrated AI writer, a robust admin dashboard, and a highly responsive Tailwind UI.
            </p>
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