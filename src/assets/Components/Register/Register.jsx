import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import UseAuth from "../Hook/UseAuth";
import { useState } from "react";


const Register = () => {
  //   const [registerError, setRegisterError] = useState([]);

  const [showPassword, setShowPassword] = useState(false);

  const { registerAccount } = UseAuth();
  const {register,handleSubmit} = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    registerAccount(email, password)
        .then((result) => {console.log(result);
        toast.success("Account created Successfully")
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
    } else if (!/[a-]/.test(password)) {
      // setRegisterError(' Must have an Lowercase letter in the password');
      toast.error(
        "Your Password Must have an Lowercase letter in the password"
      );
      return;
    }
  };

  return (
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col lg:flex gap-12">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-5xl font-bold">Sign Up now!</h1>

    //     </div>
    //     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //       <form className="card-body">
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             type="email"
    //             placeholder="email"
    //             className="input  input-bordered"
    //             required
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Password</span>
    //           </label>
    //           <input
    //             type="password"
    //             placeholder="password"
    //             className="input input-bordered"
    //             required
    //           />
    //           <label className="label">
    //             <a href="#" className="label-text-alt link link-hover">
    //               Forgot password?
    //             </a>
    //           </label>
    //         </div>
    //         <div className="form-control mt-6">
    //           <button className="btn btn-primary">Sign Up</button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="container mx-auto">
      <h2 className="pp text-5xl mt-20 text-center  font-bold mb-20">
        Register{" "}
      </h2>
      <div className="container w-1/2 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-gray-500 p-8 rounded-xl"
        >
          <div className="w-1/2 mx-auto flex  flex-col  gap-2 mb-6">
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
          <div className="w-1/2 mx-auto flex flex-col gap-2 mb-6">
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
          <div className="w-1/2 mx-auto flex flex-col gap-2 mb-6">
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
          <div className="w-1/2 mx-auto flex flex-col gap-2 mb-6">
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
          <div className="flex items-center justify-center gap-5 mb-4">
            <h2 className="pp font-semibold"> Already have an account ?</h2>
            <Link
              to="/log_in"
              className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-2 rounded-lg hover:scale-105 cursor-pointer transition text-white pp  lg:text-lg bg-[#EB6753] "
            >
              Log In{" "}
            </Link>
          </div>

          <div className="w-1/2 mx-auto flex flex-col gap-2 mb-6">
            <button className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white pp font-semibold lg:text-lg bg-[#59C6D2] ">
              Sign Up{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
