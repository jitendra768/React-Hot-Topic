import React from 'react';
import './style.css';
import Fruit from './Fruit';

const fruits = {
  name: 'Mango',
  color: 'Yellow',
};

export default function App() {
  return (
    <div className="App">
      <Fruit fruits={fruits} />
    </div>
  );
}
