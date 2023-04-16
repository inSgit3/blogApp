const BlogList = ({ blogs, title }) => {
  const content = blogs.map((item) => {
    return (
      <div className="content blog-details" key={item.id}>
        <h2>{item.title}</h2>
        <p>written by {item.author}</p>
        <h4>{item.body}</h4>
      </div>
    );
  });
  return (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  );
};

export default BlogList;
