import React, { useState, useContext } from 'react';

let context = React.createContext(null);
function Parents() {
  const [fName, setfName] = useState('firstName');
  const [lName, setlName] = useState('LastName');
  return (
    <>
      <context.Provider value={{ fName, lName }}>
        <div>There is a Parent components</div>
        <br />
        <ChildA />
      </context.Provider>
    </>
  );
}

function ChildA() {
  return (
    <>
      this is ChildA component. <br />
      <ChildB />
    </>
  );
}

function ChildB() {
  return (
    <>
      this is ChildB component. <br />
      <ChildC />
    </>
  );
}

function ChildC() {
  const { fName, lName } = useContext(context);
  return (
    <>
      This is ChildC component.
      <h3> Data from Parent component is as follows:</h3>
      <h4>{fName}</h4>
      <h4>{lName}</h4>
    </>
  );
}
export default Parents;
