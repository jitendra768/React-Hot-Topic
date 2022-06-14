import React from 'react';
import './style.css';
import Fruit from './components/Fruit';
import Car from './components/Car';

const fruits = {
  name: 'Mango',
  color: 'Yellow',
};

export default function App() {
  return (
    <div className="App">
      <Fruit fruits={fruits} />
      <Car/>
    </div>
  );
}
