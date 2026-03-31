import { useAppContext } from '../context/AppContext'

const Navbar = () => {
  const { navigate, token } = useAppContext()
  return (
   <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      
      {/* Left: Brand */}
      <div className="flex items-center">
        <button 
          onClick={() => navigate('/')} 
          className="text-xl font-bold text-gray-900 tracking-tight hover:text-gray-700"
        >
          NeuralNote
        </button>
      </div>

      {/* Center: Desktop Links */}
      <div className="hidden lg:flex items-center space-x-8">
        <button onClick={() => navigate('/')} className="text-sm font-medium text-gray-600 hover:text-gray-900">Home</button>
        <button onClick={() => navigate('/blog')} className="text-sm font-medium text-gray-600 hover:text-gray-900">Blog</button>
        <button onClick={() => navigate('/admin')} className="text-sm font-medium text-gray-600 hover:text-gray-900">Admin</button>
      </div>

      {/* Right: Auth & Mobile Menu */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => { token ? navigate('/admin') : navigate('/login') }}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          {token ? 'Dashboard' : 'Login'}
        </button>

        {/* Mobile Toggle - Simple Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="p-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white border border-gray-100 rounded-xl w-52 space-y-1">
            <li><button onClick={() => navigate('/')} className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 rounded-lg">Home</button></li>
            <li><button onClick={() => navigate('/blog')} className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 rounded-lg">Blog</button></li>
            <li><button onClick={() => navigate('/admin')} className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 rounded-lg">Admin</button></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>
  )
}

export default Navbar