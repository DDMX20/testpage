import React, { memo, useState } from "react";

import BestSeller from "../../../assets/BestSellerTag.svg";
import book1 from "../../../assets/book1.png";
import vol2L from "../../../assets/vol2L.png";
import Bitmap from "../../../assets/Bitmap.png";
import { FaAngleDown } from "react-icons/fa";
import LimitedEdition from "../../../assets/Group 2 Copy 21.png";
import ItemCard from "./ItemCard.js";
import { Accordion, Card } from "react-bootstrap";

const Data = [
  {
    imgTag: BestSeller,
    Image: Bitmap,
    title: "Income Tax Rules with Master Guide To Income Tax Rules",
    author: "Aditya Gadge,  Biharilal Deora",
    price: "Rs.  345",
    stars: "",
    button1Tag: "Add to Cart",
    ButtonTwoTag: "buy now",
  },
  {
    imgTag: "",
    Image: vol2L,
    title: "Central Excise Manual (Vol 2) (Set of 3 Books)",
    author: "Amitabha Mukherjee ",
    price: "Rs. 1,799",
    stars: "",
    button1Tag: "Add to Cart",
    ButtonTwoTag: "buy now",
  },
  {
    imgTag: LimitedEdition,
    Image: book1,
    title: "Central Excise Manual (Vol 2) (Set of 3 Books)",
    author: "By S. N. Bidani, P. K. Mitra",
    price: "Rs. 1,799",
    stars: "",
    button1Tag: "Add to Cart",
    ButtonTwoTag: "buy now",
  },
  {
    imgTag: LimitedEdition,
    Image: book1,
    title: "Central Excise Manual (Vol 2) (Set of 3 Books)",
    author: "By S. N. Bidani, P. K. Mitra",
    price: "Rs. 1,799",
    stars: "",
    button1Tag: "Add to Cart",
    ButtonTwoTag: "buy now",
  },
  {
    imgTag: "",
    Image: vol2L,
    title: "Central Excise Manual (Vol 2) (Set of 3 Books)",
    author: "Amitabha Mukherjee ",
    price: "Rs. 1,799",
    stars: "",
    button1Tag: "Add to Cart",
    ButtonTwoTag: "buy now",
  },
  {
    imgTag: BestSeller,
    Image: Bitmap,
    title: "Income Tax Rules with Master Guide To Income Tax Rules",
    author: "Aditya Gadge,  Biharilal Deora",
    price: "Rs.  345",
    stars: "",
    button1Tag: "Add to Cart",
    ButtonTwoTag: "buy now",
  },
];
const ItemContainerComp = memo((props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Accordion defaultActiveKey="0" className="col-12 row">
        <div className="col-6 p-5" style={{ fontSize: "20px" }}>
          <strong>{props.ContainerName}</strong>{" "}
          <Accordion.Toggle
            eventKey="0"
            onClick={() => setClicked(!clicked)}
            as="text"
          >
            <FaAngleDown color="orange" fontSize="25" />
          </Accordion.Toggle>
        </div>
        <div className="col-6  p-5 text-right">
          <a
            href={props.link}
            style={{
              color: "#F88822",
              fontSize: "14px",
              fontFamily: "FuturaPT",
              borderBottom: "1px solid orange",
            }}
          >
            View all
          </a>
        </div>
        <p className="border-top">
          <Accordion.Collapse eventKey="0">
            <div className="col-12 row pt-5">
              {Data.map((Item) => {
                return (
                  <div className="col-4 border-0 mx-auto">
                    <ItemCard
                      img={Item.Image}
                      title={Item.title}
                      author={Item.author}
                      Price={Item.price}
                      button1={Item.button1Tag}
                      stars={Item.stars}
                      button2={Item.ButtonTwoTag}
                      imgTag={Item.imgTag}
                    />
                  </div>
                );
              })}
            </div>
          </Accordion.Collapse>
        </p>
      </Accordion>
    </>
  );
});

export default ItemContainerComp;
