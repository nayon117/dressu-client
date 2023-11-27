import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api";

const Teach = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = async (data) => {
    
    const teacherInfo = {
      name: data.name,
      experience: data.experience,
      title: data.title,
      category: data.category,
      image: user?.photoURL,
      status:'pending'
    };

    console.log(teacherInfo);

    const { data: datas = [] } = await axiosSecure.post(
      "/teacher/requests",
      teacherInfo
    );
    console.log(datas);
    if (datas.insertedId) {
      reset();
      toast.success("your class is pending! wait for admin approval");
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
              {...register("name", { required: true })}
              type="text"
              placeholder="name..."
              className="input input-bordered w-full"
            />
          </div>
         
            {/* exprienced */}
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Experience*</span>
              </label>
              <select
                defaultValue="default"
                {...register("experience", { required: true })}
                className="select select-bordered w-full  "
              >
                <option disabled value="default">
                  select a category
                </option>
                <option value="begineer">Beginner</option>
                <option value="experienced">Experienced</option>
                <option value="pro">Pro</option>
              </select>
            </div>
            {/* title */}
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Title*</span>
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="title..."
                className="input input-bordered w-full"
              />
            </div>

          {/* category */}
          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="select select-bordered w-full  "
            >
              <option disabled value="default">
                select a category
              </option>
              <option value="web-development">Web Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="ethical-hacking">Ethical Hacking</option>
              <option value="app-development">App Development</option>
              <option value="android-development">Android Development</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn bg-[#332883] text-white block mx-auto mt-6"
          >
            Submit for review
          </button>
        </form>
      </div>
    </div>
  );
};
export default Teach;
