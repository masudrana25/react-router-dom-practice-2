import React from 'react';
import './Friend.css'

const Friend = (props) => {
  const { name, email } = props.friend;
  return (
    <div className='container'>
      <h2> Name : {name}</h2>
      <p> Email : {email}</p>
    </div>
  );
};

export default Friend;