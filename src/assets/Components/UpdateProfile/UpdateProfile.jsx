import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import UseAuth from "../Hook/UseAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProfile = ({ title }) => {
  const { register, handleSubmit } = useForm();
  const { user, updateUserProfile } = UseAuth();
  const { displayName, email, photoURL } = user;

  // const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const { name, email, photoUrl } = data;
    updateUserProfile(name, email, photoUrl);
    toast.success("Profile Updated Successfully");
    navigate("/");
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container mx-auto">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <h2 className="pp text-3xl md:text-5xl mt-20 text-center  font-bold mb-20">
          Update Your Profile{" "}
        </h2>

        <div className="container px-6 lg:w-1/2 md:mx-auto">
          <div className="text-center space-y-5 my-5 border-2 rounded-xl border-gray-700 p-5">
            <div>
              <img
                className="size-24 rounded-full mx-auto"
                src={photoURL}
                alt=""
              />
            </div>
            <h2 className="pp md:text-2xl">Name : {displayName} </h2>
            <h2 className="pp md:text-2xl">Email : {email} </h2>
          </div>
        </div>
        <div className="container px-6 lg:w-1/2 md:mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-2 border-gray-500 p-8 rounded-xl"
          >
            <div className="lg:w-1/2 mx-auto flex flex-col gap-2 mb-6">
              <label className="pp font-semibold text-xl" htmlFor="">
                Name:
              </label>
              <input
                placeholder={displayName}
                type="text"
                name="name"
                id=""
                required
                className="input input-bordered w-full"
                {...register("name", { required: true })}
              />
            </div>
            <div className="lg:w-1/2 mx-auto flex flex-col gap-2 mb-6">
              <label className="pp font-semibold text-xl" htmlFor="">
                Email:
              </label>
              <input
                placeholder={email}
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
                placeholder={photoURL}
                type="url"
                name="url"
                id=""
                required
                className="input input-bordered w-full"
                {...register("photoUrl", { required: true })}
              />
            </div>

            <div className="lg:w-1/2 mx-auto flex flex-col gap-2 mb-6">
              <button className="lg:mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white pp font-semibold lg:text-lg bg-[#EB6753] ">
                Update{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
UpdateProfile.propTypes = {
  title: PropTypes.object.isRequired,
};
export default UpdateProfile;
