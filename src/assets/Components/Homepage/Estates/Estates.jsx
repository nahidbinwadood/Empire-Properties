import { useLoaderData } from "react-router-dom";
import Estate from "../../Estate/Estate";
import 'animate.css';

const Estates = () => {
  const estates=useLoaderData();
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-easing="linear"
    data-aos-duration="1500" className="mx-8 md:mx-4 ">
      <h2 className="text-3xl text-center mt-20 font-bold pp ">Estates</h2>
      <p className="text-center text-md md:w-1/2 mx-auto pp mt-4 ">
        Luxurious real estate epitomizes refined living, blending architectural
        mastery with opulent amenities, promising comfort, indulgence, and a
        statement of distinction.
      </p>

      <div className="container mx-auto mt-20"  >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-0">
          {
            estates.map((estate)=> <Estate key={estates.id} estate={estate}></Estate>)

          }
        </div>
      </div>
    </div>
  );
};

export default Estates;
