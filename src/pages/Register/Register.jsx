import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../api/utils";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import registrationImg from "../../assets/regis.json";
import Lottie from "lottie-react";
import { getToken, saveUser } from "../../api/auth";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth() || {}

  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const image = data.image[0];

    try {
      // upload image to imgbb
      const imageData = await imageUpload(image);

      // create user
      const result = await createUser(data.email, data.password);

      // update user
      await updateUserProfile(data.name, imageData?.data?.display_url);
     
      // save user information
      const databaseResponse = await saveUser(result?.user)
      console.log(databaseResponse);

      // get token 
      await getToken(result?.user?.email)

      toast.success("sign up successful");
      navigate("/");
      
    } catch (error) {
      console.log(error.message);
      toast.error(error?.message)
    }
  };

   //  google sign in
   const handleGoogleLogin = async () => {
    try {
      // create user
      const result = await signInWithGoogle();

      // save user in database
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);

      // get token
      await getToken(result?.user?.email);

      navigate("/");
      toast.success("sign up successful");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2  ">
            <Lottie
              className="w-2/3"
              loop={false}
              animationData={registrationImg}
            ></Lottie>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl ">
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
                  className="p-3 rounded-md bg-third outline-none border-none"
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
                  className="p-3 rounded-md bg-third outline-none border-none"
                />
                {errors.email && (
                  <span className="text-red-500"> Email is required</span>
                )}
              </div>
              <div className="form-control relative">
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
                  className="p-3 rounded-md bg-third outline-none border-none"
                />
                 <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center focus:outline-none top-8"
                >
                  {showPassword ? (
                    <BsEyeSlash className="text-first" />
                  ) : (
                    <BsEye className="text-first" />
                  )}
                </button>
                {errors.password?.type === "required" && (
                  <span className="text-red-500"> password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    password must be at least 6 character long
                  </span>
                )}
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="bg-first btn w-full rounded-md py-2 text-white hover:bg-white hover:text-first"
                >
                  {loading ? (
                    <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner>
                  ) : (
                    "sign up "
                  )}
                </button>
              </div>
            </form>
            <div
              onClick={handleGoogleLogin}
              className="  btn bg-white mx-8  mb-4 hover:bg-white hover:text-first  "
            >
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </div>
            <p className="text-center  mb-3    ">
              Already have an account ?
              <Link className="text-second ml-1" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
