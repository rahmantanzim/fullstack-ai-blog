import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const AllComments = ({data}) => {
  const [comments, setComments] = React.useState([]);
  const fetchComments = async()=>{
    try{
      const {data} = await axios.post('/api/blog/comments',{blogId: data._id})
      if(data.success){
        setComments(data.comments)
      } 
      else{
        toast.error(data.message)
      }

    }
    catch(e){
      toast.error(data.message)
    }
  }
  useEffect(()=>{
    if(data?._id){
      fetchComments();
    }
  },[])
  return (
    <div className="max-w-2xl  py-6 mt-8 bg-gray-50 rounded-xl">
      <h2 className="mb-6 text-xl font-bold text-gray-800 border-b pb-2">
        Comments ({comments.length})
      </h2>
      
      <div className="flex flex-col">
        {comments.map((item) => (
          <div 
            key={item.id} 
            className="flex gap-4 p-4 mb-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full font-bold uppercase">
                {item.name ? item.name.charAt(0) : '?'}
              </div>
            </div>

            {/* Comment Content */}
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
              <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                {item.comment}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllComments;