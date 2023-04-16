import React, { useState, useEffect } from "react";
import { getRecentPosts } from "./instagram";

const RecentInstagramPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getRecentPosts();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading Instagram posts...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="instagram-post">
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.media_type === "IMAGE" && (
                  <div
                    className="instagram-image"
                    style={{ backgroundImage: `url(${post.media_url})` }}
                  />
                )}
                {post.media_type === "VIDEO" && (
                  <div
                    className="instagram-video"
                    style={{ backgroundImage: `url(${post.thumbnail_url})` }}
                  />
                )}
              </a>
              <p>{post.caption}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentInstagramPosts;
