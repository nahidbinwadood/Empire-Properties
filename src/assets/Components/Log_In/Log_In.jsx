import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import UseAuth from "../Hook/UseAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Log_In = ({title}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn, googleLogin, githubSignIn, facebookLogin } = UseAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const socialLogin = (providers) => {
    providers().then((result) => {
      if (result.user) {
        toast.success("Log In Successfully");
        navigate(location?.state || "/")
      }
    });
  };

  const onSubmit = (data) => {
    const { email, password } = data;

    logIn(email, password).then((result) => {
      console.log(result);
      if (result.user) {
        navigate(location?.state || "/")
      }
      toast.success("Log In Successfully");
    })
    .catch(()=>{
      toast.error("Invalid Credentials");
    })
  };

  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-easing="linear"
    data-aos-duration="1000" className="container mx-auto">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h2 className="pp text-5xl mt-20 text-center  font-bold mb-20">
        Log In{" "}
      </h2>
      <div className="container px-6 lg:w-1/2 md:mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-gray-500 p-8 rounded-xl"
        >
          <div className="lg:w-1/2 mx-auto flex flex-col gap-2 mb-6">
            <label className="pp font-semibold text-xl" htmlFor="">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id=""
              required
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
          </div>

          <div className="lg:w-1/2 mx-auto flex flex-col gap-2 mb-6">
            <label className="pp font-semibold text-xl" htmlFor="">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id=""
                required
                className="input input-bordered w-full"
                {...register("password", { required: true })}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaEye className="absolute top-1/3 right-2 cursor-pointer" />
                ) : (
                  <FaEyeSlash className="absolute top-1/3 right-2 cursor-pointer" />
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-8">
            <h2 className="pp font-semibold"> Need an account ?</h2>
            <Link
              to="/register"
              className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-2 rounded-lg hover:scale-105 cursor-pointer transition text-white pp  lg:text-lg bg-[#59C6D2] "
            >
              Register{" "}
            </Link>
          </div>
          <div className="border border-[#30325E33] "></div>
          <div className="lg:w-1/2 mx-auto flex flex-col gap-2 my-6">
            <button className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white pp font-semibold lg:text-lg bg-[#EB6753] ">
              Log In{" "}
            </button>
          </div>

          <div
            onClick={() => socialLogin(googleLogin)}
            className="lg:w-1/2 mx-auto pp font-semibold text-center md:text-start hover:scale-105 cursor-pointer transition text-white flex items-center justify-center bg-[#4081EC] px-6 py-3 rounded-lg gap-4 mb-6"
          >
            <FaGoogle className="size-6" />
            Sign With Google
          </div>
          <div
            onClick={() => socialLogin(githubSignIn)}
            className="lg:w-1/2 text-center md:text-star mx-auto pp font-semibold hover:scale-105 cursor-pointer transition text-white flex items-center justify-center bg-[#000] px-6 py-3 rounded-lg gap-4 mb-6"
          >
            <FaGithub className="size-6" />
            Sign With GitHub
          </div>
          <div
            onClick={() =>  socialLogin(facebookLogin)}
            className="lg:w-1/2 text-center md:text-star mx-auto pp font-semibold hover:scale-105 cursor-pointer transition text-white flex items-center justify-center bg-[#4081EC] px-6 py-3 rounded-lg gap-4 mb-6"
          >
            <FaFacebook className="size-6" />
            Sign With FaceBook
          </div>
        </form>
      </div>
    </div>
  );
};
Log_In.propTypes = {
  title: PropTypes.object.isRequired,
};
export default Log_In;
