import React, { memo, useState } from "react";
import { Accordion, Card } from "react-bootstrap";

const SidebarContent = memo((props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <Accordion defaultActiveKey="1">
        <Accordion.Toggle
          eventKey="0"
          onClick={() => setClicked(!clicked)}
          as="text"
        >
          {clicked ? (
            <p>
              <span style={{ color: "orange" }}>{`-  `}</span>
              <span>{`${props.heading}`}</span>
            </p>
          ) : (
            <p>
              <span style={{ color: "orange" }}>{`+  `}</span>
              <span>{`${props.heading}`}</span>
            </p>
          )}
        </Accordion.Toggle>
        <p className="border-top">
          <Accordion.Collapse eventKey="0">
            <Card.Body className="p-0">
              <ul className="">
                {props.list.map((listitem) => (
                  <li
                    style={{
                      fontSize: "15px",
                      listStyle: "none",
                      marginLeft: "0px",
                    }}
                  >
                    {listitem}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </p>
      </Accordion>
    </div>
  );
});

export default SidebarContent;
