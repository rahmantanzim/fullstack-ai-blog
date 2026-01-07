import React, { useState } from 'react'
import { dashboard_data, blog_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const Dashboard = () => {
  const [data, setData] = useState(dashboard_data)
  return (
    <div className='p-6 flex flex-col gap-10'>
      <div className="upper-section flex gap-2">

        <div className="card card-border bg-base-100 w-96 border-2 ">
          <div className="card-body  items-center text-center">
            <h2 className="card-title text-center text-6xl">{data.blogs}</h2>
            <p>Total Posts</p>
          </div>
        </div>

        <div className="card card-border bg-base-100 w-96 border-2 ">
          <div className="card-body  items-center text-center">
            <h2 className="card-title text-center text-6xl">{data.comments}</h2>
            <p>Total Comments</p>
          </div>
        </div>

        <div className="card card-border bg-base-100 w-96 border-2 ">
          <div className="card-body  items-center text-center">
            <h2 className="card-title text-center text-6xl">{data.drafts}</h2>
            <p>Drafts</p>
          </div>
        </div>

      </div>
      <div className="list-of-blogs">
        <h2 className='text-3xl text-bold mb-6'>Recent Blogs</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th className='xl:px-6'>#</th>
                <th>Blog Title</th>
                <th className='max-sm:hidden'>Date </th>
                <th className='max-sm:hidden'>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {blog_data.slice(0,5).map((item,index)=>{
                return (<BlogTableItem index = {index+1} key={data._id} bt_data = {item}/>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard








