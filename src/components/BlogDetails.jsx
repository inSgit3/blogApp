import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(async () => {
      await reassignIds();
      navigate("/");
    });
  };

  const reassignIds = async () => {
    const response = await fetch("http://localhost:8000/blogs");
    const blogs = await response.json();
    const updatedBlogs = blogs.map((blog, index) => ({
      ...blog,
      id: index + 1,
    }));

    await Promise.all(
      blogs.map((blog) =>
        fetch("http://localhost:8000/blogs/" + blog.id, {
          method: "DELETE",
        })
      )
    );

    await Promise.all(
      updatedBlogs.map((blog) =>
        fetch("http://localhost:8000/blogs/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog),
        })
      )
    );
  };

  return (
    <div className="homepage blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p> Written by {blog.author}</p>
          <h4>{blog.body}</h4>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
