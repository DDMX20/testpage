import React, { memo } from "react";
import Resarch from "../../assets/Reserach.svg";
import Notification from "../../assets/Notification.svg";
import Profile from "../../assets/Profile.svg";
import Cart from "../../assets/Cart.svg";

const Features = memo(() => {
  return (
    <div className="d-flex">
      <div className=" px-3">
        <img src={Resarch}></img>
      </div>
      <div className=" px-3">
        <img src={Notification}></img>
      </div>
      <div className=" px-3">
        <img src={Profile}></img>
      </div>
      <div className=" px-3">
        <img src={Cart}></img>
      </div>
    </div>
  );
});

export default Features;
