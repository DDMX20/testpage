import React, { memo, useState } from "react";

import { FaAngleDown } from "react-icons/fa";
import { Accordion } from "react-bootstrap";
const Dropdown = memo(() => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="row">
      <div className="col ">
        <div className="bg-success text-center color-white rounded-circle p-1 text-white">
          R
        </div>
      </div>
      <div className="col border border-start-0 border-top-0 border-bottom-0">
        <div className="bg-danger text-center color-white rounded-circle p-1 text-white">
          E
        </div>
      </div>
      <div className="col border border-start-0 border-top-0 border-bottom-0">
        <div className="bg-info text-center color-white rounded-circle p-1 text-white">
          C
        </div>
      </div>
      <div className="col">
        <div className="glyphicon glyphicon-star" aria-hidden="true">
          {/* <Accordion defaultActiveKey="1">
          
              <Accordion.Toggle
                eventKey="0"
                onClick={() => setClicked(!clicked)}
                as="text"
              > */}
          <FaAngleDown color="orange" fontSize="25" />
          {/* </Accordion.Toggle>
              <Accordion.Collapse eventKey="0"></Accordion.Collapse>
            
          </Accordion> */}
        </div>
      </div>
    </div>
  );
});

export default Dropdown;
