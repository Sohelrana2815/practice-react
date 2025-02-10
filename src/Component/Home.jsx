import { useState, useEffect } from "react";
import PostsList from "./PostsList";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <>
      <div>
        <h2>{posts.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <PostsList key={post.id} post={post} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
