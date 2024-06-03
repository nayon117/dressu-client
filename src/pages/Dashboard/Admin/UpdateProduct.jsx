import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axiosSecure from "../../../api";
import {useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../api/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
  const { name, price, short_details, long_details, size, brand, category, image, _id } = useLoaderData();
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    let imageUrl = image; // Default to the existing image URL
  
    if (data.image && data.image[0]) {
      // If a new image is uploaded, update the image URL
      const formData = new FormData();
      formData.append("image", data.image[0]);
  
      try {
        const res = await axiosPublic.post(image_hosting_api, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
  
        if (res.data.success) {
          imageUrl = res.data.data.display_url;
        } else {
          toast.error("Failed to upload image!");
          return;
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image!");
        return;
      }
    }
  
    const updatedProduct = {
      name: data.name,
      price: parseFloat(data.price),
      short_details: data.short_details,
      long_details: data.long_details,
      size: data.size,
      brand: data.brand,
      category: data.category,
      image: imageUrl,
    };
  
    try {
      const { data: updatedData } = await axiosSecure.patch(`/product/${_id}`, updatedProduct);
  
      if (updatedData) {
        reset();
        toast.success("Product updated successfully!");
      } else {
        toast.error("Failed to update product!");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product!");
    }
  };
  

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              defaultValue={name}
              {...register("name", { required: true })}
              type="text"
              placeholder="Product name..."
              className="p-3 bg-third outline-none border-none rounded-md w-full"
            />
          </div>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              defaultValue={price}
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
              className="p-3 bg-third outline-none border-none rounded-md w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Short Details*</span>
            </label>
            <textarea
              defaultValue={short_details}
              {...register("short_details", { required: true })}
              placeholder="Short details..."
              className="p-3 bg-third outline-none border-none rounded-md w-full"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Long Details*</span>
            </label>
            <textarea
              defaultValue={long_details}
              {...register("long_details", { required: true })}
              placeholder="Long details..."
              className="p-3 bg-third outline-none border-none rounded-md w-full"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Size*</span>
            </label>
            <select
              {...register("size", { required: true })}
              className="p-3 bg-third outline-none border-none rounded-md w-full"
              multiple  // Allow multiple selections
            >
              <option value="M" selected={size.includes("M")}>M</option>
              <option value="L" selected={size.includes("L")}>L</option>
              <option value="XL" selected={size.includes("XL")}>XL</option>
              <option value="XXL" selected={size.includes("XXL")}>XXL</option>
            </select>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Brand*</span>
            </label>
            <select
              defaultValue={brand}
              {...register("brand", { required: true })}
              className="p-3 bg-third outline-none border-none rounded-md w-full"
            >
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
              <option value="Under Armour">Under Armour</option>
            </select>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue={category}
              {...register("category", { required: true })}
              className="p-3 bg-third outline-none border-none rounded-md w-full"
            >
              <option value="Shirt">Shirt</option>
              <option value="Pant">Pant</option>
              <option value="Outerwear">Outerwear</option>
              <option value="Activewear">Activewear</option>
            </select>
          </div>
          {/* Conditionally render the image input field */}
          {image && (
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Current Image</span>
              </label>
              <img src={image} alt="Product" className="mt-2 h-20 object-cover" />
            </div>
          )}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">New Image*</span>
            </label>
            <input
              {...register("image")}
              type="file"
            />
          </div>
          <button type="submit" className="btn bg-first text-white mt-4">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
