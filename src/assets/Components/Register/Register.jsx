import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import UseAuth from "../Hook/UseAuth";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Register = ({ title }) => {
  //   const [registerError, setRegisterError] = useState([]);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { registerAccount, updateUserProfile } = UseAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password, fullName, photoUrl } = data;

    registerAccount(email, password)
      .then((result) => {
        console.log(result);
        if (result.user) {
          updateUserProfile(fullName, email, photoUrl);
          navigate(location?.state || "/");
        }
        toast.success("Account created Successfully");
      })
      .catch(() => {
        toast.error("Email Already In use !");
      });

    //Password Validation:

    if (password.length < 6) {
      // setRegisterError('Length must be at least 6 character')
      toast.error("Your Password Length must be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      // setRegisterError(' Must have an Uppercase letter in the password');
      toast.error(
        "Your Password Must have an Uppercase letter in the password"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      // setRegisterError(' Must have an Lowercase letter in the password');
      toast.error(
        "Your Password Must have an Lowercase letter in the password"
      );
      return;
    }
  };

  return (

    <div data-aos="fade-down"
    data-aos-anchor-placement="top-bottom"
    data-aos-easing="linear"
    data-aos-duration="1000" className="container mx-auto">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h2 className="pp text-5xl mt-20 text-center  font-bold mb-20">
        Register{" "}
      </h2>
      <div className="container px-6 lg:w-1/2 md:mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-gray-500 p-8 rounded-xl"
        >
          <div className="lg:w-1/2 mx-auto flex  flex-col  gap-2 mb-6">
            <label className="pp font-semibold text-xl" htmlFor="">
              Full Name:
            </label>
            <input
              type="text"
              name="name"
              id=""
              required
              className="input input-bordered w-full"
              {...register("fullName", { required: true })}
            />
          </div>
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
              Photo Url:
            </label>
            <input
              type="url"
              name="url"
              id=""
              required
              className="input input-bordered w-full"
              {...register("photoUrl", { required: true })}
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
          <div className="flex flex-col md:flex-row gap-5  items-center justify-center md:gap-4 mb-4">
            <h2 className="pp md:pl-6 font-semibold"> Already have an account ?</h2>
            <Link
              to="/log_in"
              className="lg:mr-4 w-full md:w-auto text-center  md:mr-0 px-4 py-2 lg:px-5 lg:py-2 rounded-lg hover:scale-105 cursor-pointer transition text-white pp  lg:text-lg bg-[#EB6753] "
            >
              Log In{" "}
            </Link>
          </div>

          <div className="lg:w-1/2 mx-auto flex flex-col gap-2 mb-6">
            <button className="mr-4 w-full text-center md:mr-0 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white pp font-semibold lg:text-lg bg-[#59C6D2] ">
              Sign Up{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
Register.propTypes = {
  title: PropTypes.object.isRequired,
};
export default Register;
