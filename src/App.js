import React from 'react';
import './style.css';
import Fruit from './components/Fruit';
import Car from './components/Car';
// import Parent from './components/PropDrilling';
// import Parents from './components/With_Context';
import Get from './FetchData/AxiosData';
// import Posts from './FetchData/FetchApi';

const fruits = {
  name: 'Mango',
  color: 'Yellow',
};

export default function App() {
  return (
    <div className="App">
      {/* <Fruit fruits={fruits} />  */}
      <Car/>
      {/* <Parent/> */}
      {/* <Parents/> */}
      {/* <Posts/> */}
      {/* <Get /> */}
    </div>
  );
}
