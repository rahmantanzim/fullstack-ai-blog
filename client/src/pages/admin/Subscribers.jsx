import { useEffect, useState } from 'react'

import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

const Subscribers = () => {
  const { axios } = useAppContext();
  const [emails, setEmails] = useState(null)
  const fetchEmails=  async() =>{
        try {
            const {data} = await axios.get('/api/newsletter/all-subscribed-emails')
            data.success ? setEmails(data.email) : toast.error("No emails found")                          
        }
        catch (error) {
          toast.error('ERROR: ' + error.message)
        }
  }

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        
        {/* Header Section */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
          <h2 className="text-lg font-bold text-gray-800">Subscribers</h2>
          <div className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
            Total: <span className="text-blue-600 font-bold">{emails?.length || 0}</span>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            
            {/* Table Head */}
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="font-semibold px-6 py-4 w-[10%] rounded-tl-lg">#</th>
                <th className="font-semibold px-6 py-4 w-[50%]">Email</th>
                <th className="font-semibold px-6 py-4 w-[40%] rounded-tr-lg">Subscribed On</th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {emails && emails.length > 0 ? (
                emails.map((email, index) => (
                  <tr 
                    key={email._id} 
                    className="hover:bg-blue-50/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-gray-400 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{email.email}</td>
                    <td className="px-6 py-4 text-gray-500">
                      {/* Formats the date cleanly (e.g., "Jan 5, 2026") */}
                      {new Date(email.createdAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                  </tr>
                ))
              ) : (
                /* Empty State */
                <tr>
                  <td colSpan="3" className="text-center py-12 text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-3xl mb-3 opacity-50">📬</span>
                      <p className="text-base font-medium text-gray-600">No subscribers found.</p>
                      <p className="text-sm text-gray-400 mt-1">When people subscribe, they will appear here.</p>
                    </div>
                  </td>
                </tr>
              )}  
            </tbody>
            
          </table>
        </div>
      </div>
    </>
  )
}

export default Subscribers