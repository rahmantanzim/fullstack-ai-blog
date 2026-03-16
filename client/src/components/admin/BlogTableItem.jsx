import { useState } from 'react'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const BlogTableItem = ({ bt_data, index, axios, fetchBlogs }) => {
    const navigate = useNavigate();
    const { _id,title, createdAt, isPublished } = bt_data
    const blog_date = new Date(createdAt)
    const [is_Published,setIs_published] = useState(isPublished)
    //handle delete fucntion:
    const deleteBlog = async()=>{
        const confirmed = window.confirm('Are you sure you want to delete this blog?');
        if(!confirmed) return;
        try{
            const {data} = await axios.post('/api/blog/delete',{id:bt_data._id})
            if(data.success){
                toast.success(data.message)
                await fetchBlogs();

            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error('Failed to delete blog')
        }
    }
    //handle publish/unpublish function:
    const togglePublish = async()=>{
        const confirmed = window.confirm(`Are you sure you want to procced?`);
        if(!confirmed) return;  
        try{
            const {data} = await axios.post('/api/blog/toggle-publish',{id:bt_data._id})
            if(data.success){
                toast.success(data.message);
                setIs_published(!is_Published);
                await fetchBlogs();
            }   
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error('Failed to toggle publish status')
        }   
    }
    return (
        <tr>
            <th>{index}</th>
            <td className='capitalize cursor-pointer' onClick={()=>{navigate(`/blog/${_id}`)}}>{title}</td>
            <td>{blog_date.toDateString()}</td>
            <td>{isPublished ? 'Published' : 'Unpublished'}</td>
            <td>
                <button onClick={togglePublish} className={ is_Published ? 'btn btn-accent' : 'btn btn-primary'}>{is_Published ? 'Unpublish' : 'Publish'}</button>
                <button onClick={deleteBlog} className='btn bg-red-600 text-white cursor-pointer mx-1'>Delete</button>
            </td>
        </tr>
    )
}

export default BlogTableItem