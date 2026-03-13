import React, { useState } from 'react';

const AddCommentForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // This is where you will eventually send the data to your backend
    console.log("New Comment Data:", { name, comment });
    
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
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            id="comment"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
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