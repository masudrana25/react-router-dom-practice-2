import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = (props) => {
  const { name, email,id } = props.friend;
  return (
    <div className='container'>
      <h2> Name : {name}</h2>
      <p> Email : {email}</p>
      <p> <Link to={`/friend/${id}`}> Show Details of ID : {id} </Link> </p>
    </div>
  );
};

export default Friend;