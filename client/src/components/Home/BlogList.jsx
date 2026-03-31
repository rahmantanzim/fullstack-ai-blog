
import { categories } from '../../assets/data'

import BlogCard from './BlogCard'
import { useAppContext } from '../../context/AppContext'
const BlogList = ({ current, setCurrent }) => {
    const { blogs, input, fetchBlogs } = useAppContext();
    fetchBlogs();
    const filteredBlogs = () => {
        if (input.length === 0) {
            return blogs;
        }
        return blogs.filter(blog => blog.title.toLowerCase().includes(input.toLowerCase()))
    }
    return (
        <div className="bg-gray-50 min-h-screen text-gray-900">
            <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

                {/* Category Nav - Better Mobile Handling */}
                <nav className="mb-12 sticky top-0 z-20 bg-gray-50/80 backdrop-blur-md py-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((item) => (
                            <button
                                key={item}
                                onClick={() => setCurrent(item)}
                                className={`px-5 py-2 text-sm font-semibold transition-all rounded-lg capitalize border
              ${current === item
                                        ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Responsive Grid */}
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {filteredBlogs()
                            .filter((blog) => (current === 'all' ? true : blog.category === current))
                            .map((item) => (
                                <div key={item._id} className="flex justify-center h-full">
                                    <BlogCard item={item} />
                                </div>
                            ))}
                    </div>

                    {/* Empty State */}
                    {filteredBlogs().filter((blog) => current === 'all' ? true : blog.category === current).length === 0 && (
                        <div className="py-24 text-center">
                            <p className="text-gray-400 text-lg">No posts found in {current}.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default BlogList