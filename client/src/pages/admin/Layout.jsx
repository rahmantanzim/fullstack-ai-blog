import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/sidebar'
import { useAppContext } from '../../context/AppContext'
const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();

  const logout = () => {
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null);
    navigate('/')
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Navbar */}
      <header className='flex items-center justify-between h-[70px] px-4 md:px-8 bg-white border-b border-gray-200 shrink-0'>
        <button onClick={() => navigate('/')} className="text-xl font-bold tracking-tight text-gray-900">
          NeuralNote
        </button>
        <button
          type="button"
          className='text-sm font-semibold px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors'
          onClick={logout}
        >
          Logout
        </button>
      </header>

      {/* Main Admin Body */}
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout