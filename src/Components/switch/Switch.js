import React, { memo, useState } from "react";
import "./Switch.css";

const Switch = memo((props) => {
  const [Mode, setMode] = useState("Hide");

  const handleClick = () => {
    if (Mode === "Hide") {
      setMode("Show");
      props.setShowSidebar(false);
    } else if (Mode === "Show") {
      setMode("Hide");
      props.setShowSidebar(true);
    }
  };
  console.log(Mode);

  return (
    <label className="switch mx-auto mt-3 ml-5">
      <input
        type="checkbox"
        id="togBtn"
        onClick={handleClick}
        checked={Mode === "Hide"}
      />
      <div className="slider"></div>
    </label>
  );
});

export default Switch;
