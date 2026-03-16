import AllComments from "../components/comments/AllComments";
import AddCommentForm from "./comments/AddCommentForm";
const BlogSingle = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Feature Image */}
        {data.image && (
          <div className="mb-8 overflow-hidden rounded-xl">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        )}

        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {data.title}
          </h1>

          <div className="flex items-center text-sm text-gray-500 gap-4">
            <span>
              By <span className="font-medium text-gray-700">Tanzim Rahman</span>
            </span>
            <span>•</span>
            <span>{data.createdAt && new Date(data.createdAt).toLocaleDateString()}</span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                {data.category}
              </span>
          </div>
        </header>

        {/* Blog Content */}
        <article
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* Comment Section */}
        <AllComments b_data={data}/>
        <AddCommentForm blog={data} />


      </div>
    </div>
    
  );
};

export default BlogSingle;
