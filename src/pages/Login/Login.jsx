import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useAuth();

  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // login
      await signIn(data.email, data.password);
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
      console.log(result);

      navigate("/");
      toast.success("sign in successful");
    } catch (error) {
      toast.error(error?.message);
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

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
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
              <Link className="text-blue-600" to="/register">
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
