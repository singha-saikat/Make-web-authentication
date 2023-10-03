/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import PropTypes from 'prop-types';

const Profile = ({ children }) => {
    const {user} = useContext(AuthContext);
    return (
        <div>
           <h2>{user.email}</h2>
        </div>
    );
};

export default Profile;

Profile.propTypes = {
    children: PropTypes.node
}