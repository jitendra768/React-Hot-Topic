// How to use lifecycle methods in functional components in React.js? useEffect() hook

// useEffect() hook Example

// The useEffect() in react is used to manage the side effects. It is one of the most commonly used react hooks

// React.js - componentDidMount Example


useEffect(() => { 
  console.log("This code will execute when the component is mounted"); 
}, []);


// componentDidUpdate Example

useEffect(() => {
   console.log("This code will execute when the component updates"); 
  });


// componentWillUnmount Example

useEffect(() => { return () => {
   console.log("Behavior right before the component is removed from the DOM.");
   } }, []);


