import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'

const AddBlog = () => {
  const editorRef = useRef(null)
  const quillRef = useRef(null)
  const [image, setimage] = useState(false)
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [category, setCategory] = useState('')
  const [isPublished, setIsPublished] = useState(false)
  const onSubmitHandler = (e) => {
    e.preventDefault()
  }
  const generateAIContent = async () => {

  }
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
  }, [])
  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="upload" className='mt-2 h-16 rounded cursor-pointer' />
          <input type="file" id='image' hidden required onChange={(e) => setimage(e.target.files[0])} />
        </label>

        <p className='mt-2'>Blog Title</p>
        <input className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' type="text" placeholder='type here' name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />

        <p className='mt-2'>Blog Subtitle</p>
        <input className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' type="text" placeholder='type here' name='subtitle' id='title' value={subtitle} onChange={(e) => setTitle(e.target.value)} />

        <p className='mt-2'>Blog Content</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
          <div ref={editorRef} ></div>
          <button type="button" className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer' onClick={generateAIContent} >Generate with AI</button>
        </div>

        <p className='mt-2'>Blog Category</p>
        <select onChange={(e) => { setCategory(e.target.value) }} name="category" id="category" className='px-3 py-2 mt-2 border text-gray-500 border-gray-300 outline-none rounded'>
          <option value="">Select Category</option>
          {blogCategories.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
          })}
        </select>

        <div className='mt-4 flex gap-2 '>
          <p className='m-0 p-0'>Publish Now</p>
          <input type="checkbox" checked={isPublished} className='scale-125 cursor-pointer'onChange={(e)=>{setIsPublished(!isPublished)}} />
        </div>

        <button type="submit" className='mt-8 w-40 h-10 bg-primary text-white rounded curosr-pointer'>Add Blog</button>

      </div>
    </form>
  )
}

export default AddBlog