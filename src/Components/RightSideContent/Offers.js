import React, { memo } from "react";
import { Card } from "react-bootstrap";
const Offers = memo((props) => {
  return (
    <div className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>C{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <a style={{ color: "orange" }}>{props.LinkText}</a>
        </Card.Body>
      </Card>
    </div>
  );
});

export default Offers;
