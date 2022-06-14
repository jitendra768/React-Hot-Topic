import React from 'react';

const Fruit = (props) => {
  return (
    <div className="fruit">
      <h1>List Of Fruits</h1>
      <p>Name:{props.fruits.name}</p>
      <p>Name:{props.fruits.color}</p>
    </div>
  );
};

export default Fruit;
