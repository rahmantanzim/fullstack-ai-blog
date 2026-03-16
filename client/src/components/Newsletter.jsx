import React from 'react'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
const Newsletter = () => {
    const { axios } = useAppContext();
    const [input, setInput] = React.useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        (!input) && alert("Please enter your email");
        try {
            const {data} = await axios.post('/api/newsletter/subscribe-newsletter', { email: input })
            data.success ? toast.success(data.message) : toast.error(data.message);
        }
        catch (e) {
            toast.error(e.message);
        }
    }
    return (
        <div className='h-[40vh] bg-base-300 flex items-center justify-center'>
            <div className="search-form">
                <h2 className='text-4xl uppercase font-bold text-center'>Subscribe to our newsletter</h2>
                <form onSubmit={handleSubmit} className='flex my-6 justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                    <input required className=' text-gray-800 w-full pl-4 outline-none placeholder-gray-500' type='text' name='search' id='search' placeholder='Subscribe...' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer ' type='submit'>SUBSCRIBE</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;