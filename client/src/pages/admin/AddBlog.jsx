import { useEffect, useRef, useState } from 'react';
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill';
import { useAppContext } from '../../context/AppContext';
import { toast } from 'react-hot-toast';    

const AddBlog = () => {
  const { axios } = useAppContext();
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [isAdding, setIsAdding] = useState(false);
  // Initialized to null instead of false for file objects
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      setIsAdding(true);
      const blog = { title, subtitle, description: quillRef.current.root.innerHTML, category, isPublished }
      const formData = new FormData(); // to send a file like image, standard JSON won't work, we need to use FormData which is a built in web API. In the backend the multer middleware will parse this formData and extract the file and other data from it.
      formData.append('blog', JSON.stringify(blog));
      formData.append('image', image)
      const { data } = await axios.post('/api/blog/add', formData);
      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setTitle('');
        setSubtitle('');
        quillRef.current.root.innerHTML = '';
        setCategory('All');
      }
      else {
        toast.error(data.message);
      }


    }
    catch (err) {
      toast.error(err.message);
    }
    finally {
      setIsAdding(false);
    }
  };

  const generateAIContent = async () => {
    // Placeholder for your backend API call
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' });
    }
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-800 h-full overflow-y-auto p-4 sm:p-10'>

      {/* Wrapped the form content in a card-like container with flex-col for consistent spacing */}
      <div className="w-full max-w-3xl bg-white p-6 md:p-10 shadow-sm rounded-lg border border-gray-100 flex flex-col gap-6">

        <div>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>Add a new post</h2>
        </div>

        {/* Thumbnail Upload */}
        <div className="flex flex-col gap-2">
          <p className="font-medium">Upload thumbnail</p>
          <label htmlFor="image" className="w-max">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload preview"
              className='h-16 object-cover rounded cursor-pointer border border-gray-200 hover:opacity-80 transition-opacity'
            />
            <input type="file" id='image' hidden onChange={(e) => setImage(e.target.files[0])} />
          </label>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-medium">Blog Title</label>
          <input
            id='title'
            name='title'
            type="text"
            placeholder='Type here'
            className='w-full max-w-lg p-2 border border-gray-300 outline-none rounded focus:border-primary transition-colors'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Subtitle */}
        <div className="flex flex-col gap-2">
          <label htmlFor="subtitle" className="font-medium">Blog Subtitle</label>
          <input
            id='subtitle'
            name='subtitle'
            type="text"
            placeholder='Type here'
            className='w-full max-w-lg p-2 border border-gray-300 outline-none rounded focus:border-primary transition-colors'
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        {/* Rich Text Content */}
        <div className="flex flex-col gap-2">
          <p className="font-medium">Blog Content</p>
          <div className="max-w-lg relative pb-14">
            {/* Added min-height so the editor doesn't collapse when empty */}
            <div ref={editorRef} className="min-h-[200px] bg-white"></div>

            <button
              type="button"
              className='absolute bottom-0 right-0 text-xs font-medium text-white bg-gray-900 hover:bg-black px-4 py-2 rounded shadow-sm transition-colors cursor-pointer z-10'
              onClick={generateAIContent}
            >
              Generate with AI
            </button>
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="font-medium">Blog Category</label>
          <select
            id="category"
            name="category"
            className='w-full max-w-lg px-3 py-2 border border-gray-300 text-gray-600 outline-none rounded focus:border-primary transition-colors'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {/* Added a disabled default option so users are forced to choose */}
            <option value="" disabled>Select Category</option>
            {blogCategories.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Publish Toggle */}
        <div className='flex items-center gap-3 mt-2'>
          <input
            type="checkbox"
            id="isPublished"
            checked={isPublished}
            // Swapped scale-125 for standardized w-5 h-5 sizing
            className='w-5 h-5 cursor-pointer accent-primary'
            onChange={() => setIsPublished(!isPublished)}
          />
          <label htmlFor="isPublished" className='cursor-pointer select-none font-medium'>Publish Now</label>
        </div>

        {/* Submit */}
        <button
          disabled={isAdding}
          type="submit"
          // Fixed 'curosr-pointer' typo
          className='mt-4 w-40 h-10 bg-primary hover:bg-primary/90 text-white font-medium rounded cursor-pointer transition-colors shadow-sm'
        >
          {isAdding ? 'Adding...' : 'Add Blog'}
        </button>

      </div>
    </form>
  );
};

export default AddBlog;