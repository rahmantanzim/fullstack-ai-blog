import toast from "react-hot-toast";

const ListComments = ({ comment, axios ,fetchComments}) => {

  const approveHandler = async () => {
    try {
      const { data } = await axios.post('/api/admin/approve-comment', { id: comment._id })
      data.success ? toast.success(data.message) : toast.error(data.message || "Failed to update comment status");
      fetchComments();
    }
    catch (error) {
      toast.error(error.message)
    }
  }

  const handleCommentDelete = async () => { 
    if (!window.confirm("Are you sure you want to delete this comment?")) return; 
    try{
      const {data} = await axios.post('/api/admin/delete-comment', {id: comment._id})
      data.success ? toast.success(data.message) : toast.error(data.message || "Failed to delete comment");
      fetchComments();
    }
    catch(e){
      toast.error('Error in FE:' + e.message );
    }
    
  }

  const badge = (status) => {
    const base = "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium";
    if (status === "approved") return `${base} bg-emerald-50 text-emerald-700`;
    if (status === "pending") return `${base} bg-amber-50 text-amber-700`;
    if (status === "spam") return `${base} bg-rose-50 text-rose-700`;
    if (status === "trash") return `${base} bg-gray-100 text-gray-600`;
    return `${base} bg-gray-100 text-gray-600`;
  };

  return (

    <>
      {/* Author */}
      <tr>
      <td className="px-4 py-4 align-top">
        <div className="font-medium text-gray-900">{comment.name}</div>
      </td>

      {/* Comment + row actions */}
      <td className="px-4 py-4 align-top">
        <p className="text-gray-800">{comment.content}</p>

      </td>

      {/* In response to */}
      <td className="px-4 py-4 align-top text-gray-700">
        <span className="text-gray-900">{comment.blog.title}</span>
      </td>

      {/* Date */}
      <td className="px-4 py-4 align-top text-gray-700">
        {new Date(comment.createdAt).toLocaleDateString()}
      </td>

      {/* Status */}
      <td className="px-4 py-4 align-top">
        <span className={badge(comment.isApproved)}>{comment.isApproved ? 'Approved' : 'Not Approved'}</span>
      </td>
      <td>
        <button disabled={comment.isApproved} onClick={approveHandler} className='btn btn-success'>{comment.isApproved ? 'Approved' : 'Approve'}</button>
        <button onClick={handleCommentDelete} className='btn bg-red-600 text-white cursor-pointer mx-1'>Delete</button>
      </td>
      </tr>




    </>
  );
};

export default ListComments;
