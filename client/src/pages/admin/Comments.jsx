import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'
import ListComments from '../../components/admin/ListComments'
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

const Comments = () => {
  const { axios } = useAppContext();
  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')

  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/admin/all-comments')
      data.success ? setComments(data.comments) : toast.error("No comments found")
    }
    catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(() => {
    fetchComments();
  }, [])
  return (
    <>
      <div className="bg-white p-3">
        <div className="px-4 py-3 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold">Comments</h2>
          <div className="text-sm text-gray-500">
            Total: <span className="font-medium text-gray-800">{comments.length}</span>
          </div>
        </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr className="border-b">
              <th className="text-left font-medium px-4 py-3 w-[28%]">Author</th>
              <th className="text-left font-medium px-4 py-3">Comment</th>
              <th className="text-left font-medium px-4 py-3 w-[20%]">Blog title</th>
              <th className="text-left font-medium px-4 py-3 w-[18%]">Submitted On</th>
              <th className="text-left font-medium px-4 py-3 w-[12%]">Status</th>
              <th className="text-left font-medium px-4 py-3 w-[22%]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {comments.length > 0 && (
              comments.map((comment) => { 
                return <ListComments key={comment._id} comment={comment} axios={axios} fetchComments={fetchComments } /> 
              })
            )}
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default Comments