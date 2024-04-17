import PropTypes from "prop-types";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { ImHome3 } from "react-icons/im";
import { Link } from "react-router-dom";
const Estate = ({ estate }) => {
  const {
    id,
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = estate;

  return (
    <div>
      <div className="space-y-6 p-6 border border-gray-400 rounded-2xl">
        <div className="">
          <img
            className="w-full h-60 mx-auto  rounded-xl "
            src={image}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-xl pp font-semibold">{estate_title} </h2>
          <p className="text-[#878787] mt-4 pp">{description} </p>
        </div>

        <div className="font-semibold pp text-lg">
          <h2>
            Segment : <span className="text-[#EB6753]">{segment_name}</span>
          </h2>
        </div>

        <div className="border border-[#30325E33]"></div>
        <div className="flex justify-between px-2 text-[#878787]">
          <div className="flex items-center justify-center gap-2">
            <RiMoneyDollarCircleFill className="size-8" />
            <h3 className="font-semibold pp  text-[#59C6D2]">{price} </h3>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ImHome3 className="size-6" />
            <h3 className="font-semibold pp text-[#34475E] ">{area} </h3>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img className="h-5 w-4" src="/image" alt="" />
            <h3 className="pp font-semibold text-[#34475E] ">
              Status : <span className="text-red-700">{status}</span>{" "}
            </h3>
          </div>
        </div>
        <div className="pt-4 flex gap-4">
          <FaLocationDot className="size-6" />
          <h2 className="font-semibold pp "> {location} </h2>
        </div>
        <div className="lg:h-28">
          <h2 className="text-[#282828] font-semibold pp text-lg pb-2">
            Facilities:
          </h2>
          <ul className="list-disc list-inside">
            {facilities.map((item, idx) => (
              <li className="pp capitalize text-[#34475E]" key={idx}>
                {item}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link to={`estate_details/${id}`} >
            <button className="font-bold w-full cursor-pointer transition hover:scale-105 text-[#150B2B] px-4 py-3 lg:px-6 lg:py-3 rounded-xl bg-[#59C6D2]">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Estate.propTypes = {
  estate: PropTypes.object.isRequired,
};
export default Estate;
