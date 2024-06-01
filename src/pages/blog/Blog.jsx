
const Blog = () => {
  return (
    <section className="ezy__blog7 light text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white">
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
              <a
                href=""
                className="bg-second hover:bg-opacity-90 text-white font-bold border border-first py-3 px-7 rounded transition"
              >
                Explore All Posts
              </a>
            </div>
          </div>

          <div className="grid grid-cols-6 mt-12 gap-6">
            {/* First Blog Post */}
            <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3">
              <article className="rounded-lg shadow-lg overflow-hidden pb-2">
                <div className="relative">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
                    alt=""
                    className="h-auto w-full shadow-lg dark:shadow-none"
                  />
                  <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                    26<br />
                    Oct<br />
                    2016
                  </div>
                </div>
                <div className="p-4 pb-8 md:p-6">
                  <p className="font-light text-sm leading-6">
                    By <a href="" className="text-first">Fashion Expert</a>
                  </p>
                  <h4 className="font-medium text-2xl">
                    Top 10 Summer Fashion Trends for 2024
                  </h4>
                  <p className="opacity-60 mt-3 mb-6">
                    Explore the hottest fashion trends to stay stylish this summer.
                  </p>
                  <a
                    href=""
                    className="bg-transparent hover:bg-blue-600 border border-first hover:text-white py-2 px-5 rounded transition mb-5"
                  >
                    Read More
                  </a>
                </div>
              </article>
            </div>
            {/* Second Blog Post */}
            <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3">
              <article className="rounded-lg shadow-lg dark:bg-[#1E2735] dark:shadow-none overflow-hidden pb-2">
                <div className="relative">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/blog/blog_4.jpg"
                    alt=""
                    className="h-auto w-full shadow-lg dark:shadow-none"
                  />
                  <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                    26<br />
                    Oct<br />
                    2016
                  </div>
                </div>
                <div className="p-4 pb-8 md:p-6">
                  <p className="font-light text-sm leading-6">
                    By <a href="" className="text-blue-600">Fashion Expert</a>
                  </p>
                  <h4 className="font-medium text-2xl">
                    How to Style Your Denim Jacket for a Chic Look
                  </h4>
                  <p className="opacity-60 mt-3 mb-6">
                    Learn creative ways to elevate your outfit with a denim jacket.
                  </p>
                  <a
                    href=""
                    className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition mb-5"
                  >
                    Read More
                  </a>
                </div>
              </article>
            </div>
            {/* Third Blog Post */}
            <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3">
              <article className="rounded-lg shadow-lg dark:bg-[#1E2735] dark:shadow-none overflow-hidden pb-2">
                <div className="relative">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg"
                    alt=""
                    className="h-auto w-full shadow-lg dark:shadow-none"
                  />
                  <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                    26<br />
                    Oct<br />
                    2016
                  </div>
                </div>
                <div className="p-4 pb-8 md:p-6">
                  <p className="font-light text-sm leading-6">
                    By <a href="" className="text-blue-600">Fashion Expert</a>
                  </p>
                  <h4 className="font-medium text-2xl">
                    5 Essential Wardrobe Staples Every Fashionista Should Own
                  </h4>
                  <p className="opacity-60 mt-3 mb-6">
                    Discover the must-have items that will elevate your wardrobe.
                  </p>
                  <a
                    href=""
                    className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition mb-5"
                  >
                    Read More
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
