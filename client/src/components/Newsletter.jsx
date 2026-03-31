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
        <div className="bg-gray-100 py-16 px-4 border-t border-gray-200">
    <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Simple Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center tracking-tight">
            Subscribe to our newsletter
        </h2>
        
        {/* Form - Stacks on mobile, inline on sm+ */}
        <div className="w-full max-w-md mt-8">
            <form 
                onSubmit={handleSubmit} 
                className="flex flex-col sm:flex-row gap-3 w-full"
            >
                <input 
                    required 
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 text-gray-800 outline-none focus:border-gray-900 transition-colors" 
                    type="email" 
                    placeholder="Enter your email..." 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button 
                    className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all active:scale-[0.98]" 
                    type="submit"
                >
                    Subscribe
                </button>
            </form>
            <p className="text-center text-xs text-gray-500 mt-4">
                No spam. Just the latest updates from NeuralNote.
            </p>
        </div>
    </div>
</div>
    )
}

export default Newsletter;