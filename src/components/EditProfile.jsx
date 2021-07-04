import React from 'react';


const EditProfile = (props) => {
    console.log(props);
    return <p>Editing profile page of user with id {props.match.params.id} </p>;
  };

  export default EditProfile