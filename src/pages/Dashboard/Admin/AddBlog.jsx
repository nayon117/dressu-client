import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axiosSecure from "../../../api";
import useAxiosPublic from "../../../api/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // send the product data to server with image
      const blogData = {
        title: data.title,
        subtitle: data.subtitle,
        details: data.details,
        image: res.data.data.display_url,
        brand: data.brand,
      };

      // Send the blog data to the server
      const { data: result } = await axiosSecure.post("/blogs", blogData);
      if (result.insertedId) {
        reset();
        toast.success("Blog added successfully!");
      }
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Add New Blog Post</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              placeholder="Enter the title of the blog post"
              className="p-3 bg-third rounded-md w-full outline-none border-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subtitle"
              className="block text-sm font-medium text-gray-700"
            >
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              {...register("subtitle")}
              placeholder="Enter the subtitle of the blog post"
              className="p-3 bg-third rounded-md w-full outline-none border-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="details" className="block text-sm font-medium ">
              Details
            </label>
            <textarea
              id="details"
              {...register("details", { required: true })}
              placeholder="Enter the details of the blog post"
              className="p-3 bg-third rounded-md w-full outline-none border-none"
              rows="6"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Image*</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Fashion Brand
            </label>
            <input
              type="text"
              id="brand"
              {...register("brand")}
              placeholder="Enter the fashion brand type"
              className="p-3 bg-third rounded-md w-full outline-none border-none"
            />
          </div>
          <button
            type="submit"
            className="bg-first hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBlog;
