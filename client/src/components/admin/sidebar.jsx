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
    // Changed 'flex-grow-1' to the standard Tailwind 'grow'
    <div className='flex flex-col border-r border-gray-200 min-h-full'>
      {navItems.map(({ path, label, icon: Icon, end }) => (
        <NavLink
          key={path}
          to={path}
          end={end}
          className={({ isActive }) =>
            `flex items-center p-3 md:px-9 md:min-w-64 gap-2 border-r-4 transition-colors duration-200 ${
              isActive 
                ? 'bg-primary/10 border-primary' 
                : 'border-transparent hover:bg-gray-50 text-gray-600 hover:text-gray-900'
            }`
          }
        >
          <Icon className="text-xl" />
          <p className='hidden md:inline-block'>{label}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;