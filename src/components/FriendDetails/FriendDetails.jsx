import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className='details'>
      <h1> This is Details of {id}</h1>
      <h3>Name : {data.name}</h3>
      <p> Email : {data.email}</p>
      <p> Phone : {data.phone} </p>
      <p> Website : {data.website}</p>
      
    </div>
  );
};

export default FriendDetails;