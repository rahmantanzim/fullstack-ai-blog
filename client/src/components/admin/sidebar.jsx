import { NavLink } from 'react-router-dom';
import { MdDashboard, MdPostAdd, MdArticle, MdComment, MdEmail } from 'react-icons/md';

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: MdDashboard, end: true },
  { path: '/admin/add-post', label: 'Add a new Post', icon: MdPostAdd },
  { path: '/admin/blog-list', label: 'List of Blogs', icon: MdArticle },
  { path: '/admin/comments', label: 'Comments', icon: MdComment },
  { path: '/admin/subscribed-emails', label: 'Subscribers', icon: MdEmail },
]

const Sidebar = () => {
  return (
    <aside className='flex flex-col bg-white border-r border-gray-200 h-full w-16 md:w-64 transition-all duration-300 shrink-0'>
      <nav className="flex flex-col py-4">
        {navItems.map(({ path, label, icon: Icon, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) =>
              `flex items-center justify-center md:justify-start gap-4 p-4 md:px-6 transition-all border-r-4 ${
                isActive 
                  ? 'bg-gray-100 border-gray-900 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Icon className="text-2xl shrink-0" />
            <span className='hidden md:block font-medium text-sm'>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;