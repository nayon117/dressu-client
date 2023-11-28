import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../api/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
 
import toast from "react-hot-toast";
import axiosSecure from "../../../api";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateClass = () => {

    const {title,price,details,_id} = useLoaderData()
    
  const { register, handleSubmit,reset } = useForm();
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic();
  

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      
      const classItem = {
        title: data.title,
        name: user?.displayName,
        email:user?.email,
        price: parseFloat(data.price),
        details: data.details,
        image: res.data.data.display_url,
      };

      
      const {data:datas=[]} = await axiosSecure.patch(`/class-add/${_id}`, classItem);
      console.log(datas);
      if (datas.modifiedCount>0) {
        reset()
        toast.success('update successful')
      }
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Title*</span>
            </label>
            <input  defaultValue={title}
              {...register("title", { required: true })}
              type="text"
              placeholder="title..."
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-6">
            {/* price */}
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input defaultValue={price}
                {...register("price", { required: true })}
                type="number"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/*  details  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details </span>
            </label>
            <textarea defaultValue={details}
              {...register("details", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
          </div>
          <div className="form-control  w-full my-6">
            <input  
              {...register("image", { required: true })}
              type="file"
              className="file-input  w-full max-w-xs"
            />
          </div>
          <button type="submit" className="btn bg-[#332883] text-white">
            Update Class
          </button>
        </form>
      </div>
    </div>
  );
};
export default UpdateClass;
