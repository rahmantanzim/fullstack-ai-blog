import { useState } from "react";
import Navbar from "../Navbar";
const Login = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(email)
        // handle login logic here
    };
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Login to Admin panel</h2>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            name="email"
                            onChange={e=>{setEmail(e.target.value)}}
                            value={email}
                            placeholder="you@example.com"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            placeholder="••••••••"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
