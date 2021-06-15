import React, { memo } from "react";
import DeliveryImage from "../../assets/Orion_truck.svg";
import Box from "../../assets/Orion_archive-box.svg";
import Pay from "../../assets/Orion_secure-payment (1).svg";

const RightOptions = memo(() => {
  return (
    <div
      className="bg-white w-100 pt-2 container rounded"
      style={{ marginLeft: "5px" }}
    >
      <div className="row px-5 pb-0">
        <img src={DeliveryImage}></img>
        <div className="col-10 d-flex flex-column pb-0">
          <h5>Quick Delivery</h5>
          <p className="p-0">FedEx courier in most of the Cities</p>
        </div>
      </div>
      <div className="row px-5">
        <img src={Box}></img>
        <div className="col-10 d-flex flex-column">
          <h5>Free Shipping</h5>
          <p className="p-0">Accorss India on order above Rs 350</p>
        </div>
      </div>
      <div className="row px-5">
        <img src={Pay}></img>
        <div className="col-10 d-flex flex-column">
          <h5>Secured Payment</h5>
          <p className="p-0">Taxmann provides secure service</p>
        </div>
      </div>
    </div>
  );
});

export default RightOptions;
