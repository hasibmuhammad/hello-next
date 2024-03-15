import Link from "next/link";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "This is the blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "This is the blog 2 description",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "This is the blog 3 description",
    },
  ];
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div className="border rounded-lg p-10 space-y-3" key={blog.id}>
            <h1 className="font-bold text-3xl tracking-widest">{blog.title}</h1>
            <p>{blog.description}</p>
            <Link className="block" href={`/blogs/${blog.id}`}>
              <button className="bg-orange-600 px-4 py-2 rounded-lg">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
