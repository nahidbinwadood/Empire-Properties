import PropTypes from "prop-types";
import Banner from "./Banner/Banner";
import Estates from "./Estates/Estates";
import { Helmet } from "react-helmet";

const Homepage = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Banner></Banner>
      <Estates></Estates>
    </div>
  );
};
Homepage.propTypes = {
  title: PropTypes.object.isRequired,
};
export default Homepage;
