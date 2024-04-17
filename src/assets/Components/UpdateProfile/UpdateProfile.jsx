import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const UpdateProfile = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h2>This is update profile section</h2>
    </div>
  );
};
UpdateProfile.propTypes = {
    title: PropTypes.object.isRequired,
  };
export default UpdateProfile;
