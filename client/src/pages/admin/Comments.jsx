import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'
import ListComments from '../../components/admin/ListComments'

const Comments = () => {
  const [comments,setComments] = useState([])
  const [filter,setFilter] = useState('Not Approved')

  const fetchComments = async()=>{
    setComments(comments_data)
  }
  useEffect(()=>{
    fetchComments();
  },[])
  return (
    <>
      <ListComments comments={comments}/>
    </>
  )
}

export default Comments