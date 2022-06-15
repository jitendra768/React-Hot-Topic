let upadatedComponent = (originalComponent) => {
  return (...props) => {
    <div className="debug">
      <OriginalToComponent {...props} />
    </div>;
  };
};
