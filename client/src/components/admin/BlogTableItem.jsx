import { useState } from 'react'
import toast from 'react-hot-toast'
 
const BlogTableItem = ({ bt_data, index, axios, fetchBlogs }) => {
    
    const { title, createdAt, isPublished } = bt_data
    const blog_date = new Date(createdAt)
    const [is_Published,setIs_published] = useState(isPublished)
    //handle delete fucntion:
    const deleteBlog = async()=>{
        console.log('Clicked delete button1')
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
    
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{title}</td>
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