import React from "react";

export default function NotFound(props) {
  return (
    <div className="vh-100">
      <div className="justify-content-center">
        <h3>{props.children}</h3>
      </div>
    </div>
  );
}
