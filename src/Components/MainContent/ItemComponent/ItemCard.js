import React, { memo } from "react";
import { Card, Button } from "react-bootstrap";
const ItemCard = memo((props) => {
  return (
    <div className="border-0">
      <Card style={{ width: "16rem", border: "none" }} className="bg-white">
        <div className="p-5 border border-bottom shadow">
          <Card.Img variant="top" src={props.img} height={250} width={200} />
        </div>
        <Card.Body>
          <Card.Text style={{ fontSize: "15px" }}>
            <strong>{props.title}</strong>
          </Card.Text>
          <Card.Text style={{ color: "orange" }}>{props.author}</Card.Text>
          <Card.Text style={{ fontSize: "12px" }}>{props.Price}</Card.Text>
          <Card.Text></Card.Text>
          <Button className="rounded-pill bg-white border-secondary text-muted  p-1 px-3">
            {props.button1}
          </Button>
          <Button
            className="rounded-pill  border-secondary  ml-1 p-1 px-3"
            style={{ backgroundColor: "#F88822" }}
          >
            {props.button2}
          </Button>
        </Card.Body>
      </Card>
      {props.imgTag ? (
        <img
          src={props.imgTag}
          style={{ zIndex: "1", position: "relative", top: "-530px" }}
          //   className="shadow"
          width={125}
          height={30}
        />
      ) : null}
    </div>
  );
});

export default ItemCard;
