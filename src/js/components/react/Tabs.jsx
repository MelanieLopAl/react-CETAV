const Tabs = ({ tabLabels }) => {
  return (
    <div id="tabs" className="header__tabs">
      {tabLabels.map((label, index) => (
        <button key={index}>{label}</button>
      ))}
    </div>
  );
};

export { Tabs };
