import React, { useState } from 'react'

const BlogTableItem = ({ bt_data, index }) => {
    const { title, createdAt, isPublished } = bt_data
    const blog_date = new Date(createdAt)
    const [is_Published,setIs_published] = useState(isPublished)
    return (
        <tr>
            <th>{index}</th>
            <td>{title}</td>
            <td>{blog_date.toDateString()}</td>
            <td>{isPublished ? 'Published' : 'Unpublished'}</td>
            <td>
                <button onClick={()=>{setIs_published(!is_Published)}} className={ is_Published ? 'btn btn-accent' : 'btn btn-primary'}>{is_Published ? 'Unublish' : 'Publish'}</button>
            </td>
        </tr>
    )
}

export default BlogTableItem