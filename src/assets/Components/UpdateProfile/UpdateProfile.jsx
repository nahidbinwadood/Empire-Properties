import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const UpdateProfile = ({ title }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container mx-auto">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <h2 className="pp text-5xl mt-20 text-center  font-bold mb-20">
          Update Your Profile{" "}
        </h2>
        <div className="container w-1/2 mx-auto">
          <form
            onSubmit={handleSubmit()}
            className="border-2 border-gray-500 p-8 rounded-xl"
          >
            <div className="w-1/2 mx-auto flex flex-col gap-2 mb-6">
              <label className="pp font-semibold text-xl" htmlFor="">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id=""
                required
                className="input input-bordered w-full"
                {...register("name", { required: true })}
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
              <button className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white pp font-semibold lg:text-lg bg-[#EB6753] ">
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
