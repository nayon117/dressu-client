import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/loginImg.json'
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import Lottie from "lottie-react";
import { getToken, saveUser } from "../../api/auth";

const Login = () => {
  const { signIn, signInWithGoogle, loading } = useAuth() || {}
  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'

  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // login
       const result =  await signIn(data.email, data.password);
       // get token
       await getToken(result?.user?.email);

      navigate(from,{replace:true});
      toast.success("sign in successful");
    } catch (error) {
      console.log(error.message);
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

      navigate(from,{replace:true});
      toast.success("sign in successful");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2  ">
          <Lottie
              className="w-2/3"
              loop={false}
              animationData={loginImg }
            ></Lottie>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  <span className="text-red-500">This field is required</span>
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
                  <span className="text-red-500">This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    password must be at least 6 character long
                  </span>
                )}
              </div>

             
              <div className="mt-3">
            <button
              type="submit"
              className="bg-[#332885] w-full  btn text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner>
              ) : (
                "Login"
              )}
            </button>
          </div>
            </form>
            <div
              onClick={handleGoogleLogin}
              className="  btn bg-white mx-8  p-1  "
            >
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </div>
            <p className="text-center py-2 mb-3">
              Already have an account ?
              <Link className="text-[#332885] ml-1" to="/register">
                Sign up
              </Link>
            </p>
            <div className="divider px-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
