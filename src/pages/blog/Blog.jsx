import{ useState, useEffect } from "react";
import useAxiosPublic from "../../api/useAxiosPublic";
import { Link } from "react-router-dom";

const Blog = () => {
  const axiosPublic = useAxiosPublic();
  const [allPostsVisible, setAllPostsVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosPublic.get("/blogs");
      setPosts(res.data);
    };

    fetchPosts();
  }, [axiosPublic]);

  const loadAllPosts = () => {
    setAllPostsVisible(true);
  };

  const seeLessPosts = () => {
    setAllPostsVisible(false);
  };

  const renderPosts = () => {
    const visiblePosts = allPostsVisible ? posts : posts.slice(0, 2);

    return visiblePosts.map((post, index) => (
      <div key={index} className="col-span-6 md:col-span-3 lg:col-span-2 mb-3">
        <article className="rounded-lg shadow-lg overflow-hidden pb-2">
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="h-60 w-full shadow-lg dark:shadow-none"
            />
          </div>
          <div className="p-4 pb-8 md:p-6">
            <p className="font-light text-sm leading-6">
              By <a href="" className="text-first">{post.brand}</a>
            </p>
            <h4 className="font-medium text-xl whitespace-nowrap">
              {post.title}
            </h4>
            <p className="opacity-60 mt-3 mb-6">
              {post.subtitle}
            </p>
            <Link
             to={`/blog/${post._id}`}
              className="bg-transparent hover:bg-first border border-first hover:text-white py-2 px-5 rounded transition mb-5"
            >
              Read More
            </Link>
          </div>
        </article>
      </div>
    ));
  };

  return (
    <section className="light">
      <img
        src="https://cdn.easyfrontend.com/pictures/blog/wide-banner.png"
        alt=""
        className="h-auto max-w-full w-full"
      />

      <div className="py-14 md:py-24">
        <div className="container px-8 md:px-24">
          <div className="grid grid-cols-12 justify-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-[32px] lg:text-[45px] leading-none font-bold mb-4">
                Stay Updated with Our Fashion Blog.
              </h2>
              <p className="text-lg font-medium opacity-80 mb-9">
                Discover the latest trends, style tips, and fashion inspiration
                from our expert bloggers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 mt-12 gap-6">
            {renderPosts()}
          </div>

          <div className="flex justify-center mt-6">
            {posts.length > 2 && !allPostsVisible && (
              <button
                onClick={loadAllPosts}
                className="bg-second hover:bg-opacity-90 text-white font-bold border border-first py-3 px-7 rounded transition"
              >
                Explore All Posts
              </button>
            )}
            {allPostsVisible && (
              <button
                onClick={seeLessPosts}
                className="bg-second hover:bg-opacity-90 text-white font-bold border border-first py-3 px-7 rounded transition"
              >
                See Less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
