const SingleBlogPage = ({ params }) => {
  const { id } = params;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="font-bold text-3xl tracking-widest">
        This is the single blog page of id: {id}
      </h1>
    </div>
  );
};

export default SingleBlogPage;
