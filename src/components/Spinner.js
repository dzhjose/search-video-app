import React from "react";
import Logo from "../logo.svg";
function Spinner() {
  return (
    <div className="d-flex justify-content-center vh-100">
      <img
        src={Logo}
        className="App-logo"
        style={{ width: 150, height: 150 }}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
