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
            <span>January 5, 2026</span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Web Development", "JavaScript", "Career"].map(tag => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
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
        <section>
          <h3 className="text-xl font-semibold mb-6">Comments</h3>

          {/* Comment Form */}
          <form className="mb-8">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Comment
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                placeholder="Write your comment..."
              />
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Post Comment
            </button>
          </form>

          {/* Comment List */}
          <div className="space-y-6">
            {[
              {
                name: "John Doe",
                time: "2 days ago",
                text: "This post is really inspiring. Thanks for sharing your journey!"
              },
              {
                name: "Sarah",
                time: "1 day ago",
                text: "Consistency really is the key. Needed this reminder."
              }
            ].map((comment, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{comment.name}</span>
                  <span className="text-xs text-gray-500">
                    {comment.time}
                  </span>
                </div>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default BlogSingle;
