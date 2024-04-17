import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
const Estate_Details = ({ title }) => {
  const allEstates = useLoaderData();
  const { id } = useParams();
  const currentEstate = allEstates.find((estate) => estate.id == id);
  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    rating,
  } = currentEstate;
  return (
    <div className="container mx-auto px-8 md:px-0 mt-12 mb-10">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="grid grid-cols-1 gap-8 md:gap-24 md:grid-cols-2">
        <div className="bg-[#1313130F] px-5 py-8 rounded-xl">
          <img
            className="animate__animated animate__backInLeft object-cover items-center mx-auto h-full rounded-md lg:h-[650px] lg:w-[400px]"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-5 animate__animated animate__backInRight">
          <h1 className="pf font-bold text-3xl md:text-5xl text-black">
            {estate_title}
          </h1>

          <h4 className="text-[#131313CF] pp text-xl">Area : {area} </h4>
          <hr />
          <h4 className="text-[#131313CF] ws text-xl">
            category : {segment_name}
          </h4>
          <hr />

          <h2 className="text-[#131313CF] font-bold pp">
            Description :{" "}
            <span className="text-gray-600 pp font-semibold">
              {" "}
              {description}{" "}
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <span className="text-black pp font-bold">Facilities :</span>
            <h3 className="text-gray-600 text-lg pp font-semibold">
              {" "}
              {facilities[0]}{" "}
            </h3>
            <h3 className="text-gray-600 text-lg pp font-semibold">
              {" "}
              {facilities[1]}{" "}
            </h3>
            <h3 className="text-gray-600 text-lg pp font-semibold">
              {" "}
              {facilities[2]}{" "}
            </h3>
          </div>
          <hr />
          <div className="flex gap-16 ">
            <div className="pp text-[#131313CF] space-y-5">
              <h2>Price : </h2>
              <h2>Status:</h2>
              <h2>Location:</h2>
              <h2>Rating:</h2>
            </div>
            <div className="pp font-semibold text-black space-y-5">
              <h2> {price} </h2>
              <h2 className="text-[#EB6753]">{status}</h2>
              <h2> {location}</h2>
              <h2>{rating} </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Estate_Details.propTypes = {
  title: PropTypes.object.isRequired,
};
Estate_Details.propTypes = {
  currentEstate: PropTypes.object.isRequired,
};

export default Estate_Details;
