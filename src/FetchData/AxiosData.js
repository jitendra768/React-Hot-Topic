import React, {useState, useEffect} from  'raect';
import axios from 'axios';

function Get(){
  const [data, setData] = useState('');
  const API = 'https://jsonplaceholder.typicode.com/users';

  const getAllData= ()=>{
    axios.get(API)
    .then((response)=>{
      console.log(response.data);
      setData(response.data);
    }).catch((err)=>{
      console.log(err);
    });
  };

  useEffect(()=>{
    getAllData();
  },[]);

  return (
    <>
    
    </>
  )
};

export default Get;
