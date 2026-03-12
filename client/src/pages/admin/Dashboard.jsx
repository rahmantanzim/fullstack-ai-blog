import React, { useState } from 'react';
import { dashboard_data, blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';

const Dashboard = () => {
  // Keeping state here is great for when you hook this up to fetch real data from your Node/Express backend later!
  const [data, setData] = useState(dashboard_data);

  // Extracted the repetitive card data into an array
  const summaryCards = [
    { label: 'Total Posts', value: data.blogs },
    { label: 'Total Comments', value: data.comments },
    { label: 'Drafts', value: data.drafts },
  ];

  return (
    <div className='p-6 flex flex-col gap-10'>
      
      {/* Upper Section: Summary Cards */}
      {/* Refactored to use a responsive grid instead of a rigid flex layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaryCards.map((card, index) => (
          <div key={index} className="card card-border bg-base-100 border-2 shadow-sm">
            <div className="card-body items-center text-center py-8">
              <h2 className="card-title text-6xl text-primary mb-2">{card.value}</h2>
              <p className="text-gray-500 font-medium">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lower Section: Recent Blogs Table */}
      <div className="list-of-blogs">
        <h2 className='text-3xl font-bold mb-6 text-gray-800'>Recent Blogs</h2>
        
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="table table-zebra w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className='xl:px-6'>#</th>
                <th>Blog Title</th>
                {/* Replaced max-sm:hidden with standard mobile-first Tailwind approach */}
                <th className='hidden sm:table-cell'>Date</th>
                <th className='hidden sm:table-cell'>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blog_data.slice(0, 5).map((item, index) => (
                <BlogTableItem 
                  // Bug fixed here: changed data._id to item._id
                  key={item._id || index} 
                  index={index + 1} 
                  bt_data={item} 
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;