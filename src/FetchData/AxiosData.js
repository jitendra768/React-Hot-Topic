import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Get() {
  const [data, setData] = useState('');
  const API = 'https://jsonplaceholder.typicode.com/users';

  const getAllData = () => {
    axios
      .get(API)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return <>
  
  {data ? data.map((item,i)=>{
    return (
      <div className='data' key={i}>
        <h3>{item.name}</h3>
      </div>
    )
  }): <h2>Data not yet</h2>}
  </>;
}

export default Get;
