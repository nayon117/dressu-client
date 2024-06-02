import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../api/useAxiosPublic";
import toast from "react-hot-toast";
import axiosSecure from "../../../api";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
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
      const product = {
        name: data.name,
        price: parseFloat(data.price),
        short_details: data.short_details,
        long_details: data.long_details,
        size: data.size,
        brand: data.brand,
        category: data.category,
        image: res.data.data.display_url,
      };

      const { data: result } = await axiosSecure.post("/products", product);
      if (result.insertedId) {
        reset();
        toast.success("Product added successfully!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Product name..."
              className="p-3 bg-gray-200 outline-none border-none rounded-md w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
              className="p-3 bg-gray-200 outline-none border-none rounded-md w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Short Details*</span>
            </label>
            <textarea
              {...register("short_details", { required: true })}
              placeholder="Short details..."
              className="p-3 bg-gray-200 outline-none border-none rounded-md w-full"
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Long Details*</span>
            </label>
            <textarea
              {...register("long_details", { required: true })}
              placeholder="Long details..."
              className="p-3 bg-gray-200 outline-none border-none rounded-md w-full"
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Size*</span>
            </label>
            <select
              {...register("size", { required: true })}
              className="p-3 bg-gray-200 outline-none border-none rounded-md w-full"
              multiple
            >
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Brand*</span>
            </label>
            <select
              {...register("brand", { required: true })}
              className="p-3 bg-gray-200 outline-none border-none rounded-md w-full"
            >
              <option value="Nike">Nike</option>
              <option value="Levi's">Levi&apos;s</option>
              <option value="Adidas">Adidas</option>
              <option value="North Face">North Face</option>
              <option value="Ralph Lauren">Ralph Lauren</option>
              <option value="Lululemon">Lululemon</option>
              <option value="Hugo Boss">Hugo Boss</option>
              <option value="Gap">Gap</option>
              <option value="Champion">Champion</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="p-3 bg-gray-200 outline-none border-none rounded-md w-full"
            >
              <option value="Shirt">Shirt</option>
              <option value="Pant">Pant</option>
              <option value="Outerwear">Outerwear</option>
              <option value="Activewear">Activewear</option>
            </select>
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
          <button
            type="submit"
            className="btn bg-first text-white py-2 px-6 rounded"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
