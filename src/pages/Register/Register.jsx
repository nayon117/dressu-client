import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { imageUpload } from "../../api/utils";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const navigate = useNavigate()
  const { createUser, updateUserProfile } = useAuth();
  const onSubmit = async (data) => {
    const image = data.image[0];

    try {
      // upload image to imgbb
      const imageData = await imageUpload(image);

      // create user
      const result = await createUser(data.email, data.password);

      // update user
      await updateUserProfile(data.name, imageData?.data?.display_url);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Your Name "
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  {...register("image", { required: true })}
                  name="image"
                  accept="image/*"
                />
                {errors.image && (
                  <span className="text-red-500">Image is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500"> Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    minLength: 6,
                    required: true,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500"> password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    password must be at least 6 character long
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center py-2 mb-3">
              Already have an account ?
              <Link className="text-blue-600" to="/login">
                Login
              </Link>
            </p>
            <div className="divider px-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
