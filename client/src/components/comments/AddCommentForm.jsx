import React, { useState, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
const AddCommentForm = ({ blog }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const { axios } = useAppContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/blog/add-comments', { blog:blog._id, name:name, content: comment })
      if (data.success) {
        toast.success(data.message)
      }
      else {
        toast.error(data.message)
      }
    }
    catch(e) {
      toast.error(`Error adding comment: ${e.message}`)
    } 

    // Clear the form after submission
    setName('');
    setComment('');
  };

  return (
    <div className="max-w-2xl p-6 mt-8 bg-white border border-gray-100 shadow-sm rounded-xl">
      <h3 className="mb-4 text-lg font-bold text-gray-800">Leave a Comment</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
            type="text"
            id="name"          
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Comment Textarea */}
        <div>
          <label htmlFor="comment" className="block mb-1 text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            onChange={(e)=>{setComment(e.target.value)}}
            value={comment}
            id="comment"
            rows="4"
            placeholder="Write your comment here..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg w-max hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;