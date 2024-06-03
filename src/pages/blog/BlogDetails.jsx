import { useEffect} from "react";
import {  useParams } from "react-router-dom";
import useAxiosPublic from "../../api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const BlogDetails = () => {
  const axiosPublic = useAxiosPublic();
  const params = useParams();

  const { data:blogInfo, isLoading, isError } = useQuery({
      queryKey: ["blogs", params.id],
      queryFn: async () => {
          const res = await axiosPublic.get(`/blog/${params.id}`);
          return res.data;
      },
  });
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <section className=" light py-14 md:py-24  ">
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-7">
            <h2 className="text-2xl leading-none font-bold md:text-6xl md:leading-none mb-6">
              Blog Details
            </h2>
            <p className="text-lg opacity-80 mb-2">
              {blogInfo?.subtitle}
            </p>
          </div>

          <div className="col-span-12">
            <div className="my-6 md:my-12 w-full">
              <img
                src={blogInfo?.image}
                alt="blog image"
                className="w-full max-h-[700px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="md:px-20">
              {/* <!-- avatar --> */}
              <div className="flex items-center mb-6">
                
                <div>
                  <p>
                    By<b> {blogInfo?.brand}</b>
                  </p>
                </div>
                <p className="opacity-75">
                  <i className="fas fa-calendar-alt ml-4 mr-2"></i>August 10th,
                  2020
                </p>
              </div>

              {/* <!-- headline --> */}
              <h3 className="text-2xl md:text-3xl leading-snug font-medium mb-6">
               {blogInfo?.title}
              </h3>
              <p className="text-lg leading-relaxed opacity-75">
               
                {blogInfo?.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogDetails;
