import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Profile = (props) => {
    console.log(props);
    return (
      <main>
        <h2>Profile Page</h2>
        <Link to="/profile/:id">Edit Profile</Link>
      </main>
    );
  };

  export default Profile