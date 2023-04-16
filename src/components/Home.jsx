import BlogList from "./BlogList";
import useFetch from "../useFetch";
import RecentInstagramPosts from "./RecentInstagramPosts";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="homepage blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      <RecentInstagramPosts />
    </div>
  );
};

export default Home;
