import { useEffect, useState } from 'react';
import { dashboard_data, blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext'; 

const Dashboard = () => {
  const {axios} = useAppContext();
  // Keeping state here is great for when you hook this up to fetch real data from your Node/Express backend later!
  const [data, setData] = useState([]);

  const fetchDashboardData = async () => {
    try{
      const {data} = await axios.get('/api/admin/dashboard')
      if(data.success){
        setData(data.dashboardData)
      }
      else{
        toast.error(data.message || "Failed to fetch dashboard data")
      }
    }
    catch(e){
      toast.error(e.message);  
    }
  }
  useEffect(()=>{
    fetchDashboardData();
  },[])
  // Extracted the repetitive card data into an array
  const summaryCards = [
    { label: 'Total Blogs', value: data?.number_of_blogs },
    { label: 'Total Comments', value: data?.number_of_comments },
    { label: 'Drafts', value: data?.drafts },
  ];

  return (
<div className='p-4 sm:p-6 lg:p-10 flex flex-col gap-8 md:gap-10'>
      
      {/* Upper Section: Summary Cards */}
      {/* 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {summaryCards.map((card, index) => (
          <div key={index} className="card bg-base-100 border border-gray-200 shadow-sm rounded-xl">
            <div className="card-body items-center text-center py-6 md:py-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1">
                {card.value || 0}
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-medium uppercase tracking-wide">
                {card.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lower Section: Recent Blogs Table */}
      <div className="w-full">
        <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800 px-1'>
          Recent Blogs <span className='text-gray-400 font-normal'>({data.number_of_blogs})</span>
        </h2>
        
        {/* Wrapper to handle horizontal scroll on small screens */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr className='text-gray-600 uppercase text-xs'>
                  <th className='p-4 w-12'>#</th>
                  <th className='p-4 text-left'>Blog Title</th>
                  <th className='p-4 text-left hidden sm:table-cell'>Date</th>
                  <th className='p-4 text-left hidden md:table-cell'>Status</th>
                  <th className='p-4 text-right'>Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.recentBlogs?.slice(0, 5).map((item, index) => (
                  <BlogTableItem 
                    key={item._id} 
                    index={index + 1} 
                    bt_data={item} 
                    axios={axios}
                    fetchBlogs={fetchDashboardData}
                  />
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile indicator for scrollable tables */}
          <div className='md:hidden text-center py-2 bg-gray-50 text-[10px] text-gray-400 border-t border-gray-100'>
            Swipe left to view more details
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;