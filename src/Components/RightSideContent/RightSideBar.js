import React, { memo } from "react";
import RightOptions from "./RightOptions";
import librarypic from "../../assets/image2.png";
import hallpic from "../../assets/image1.png";
import Offers from "./Offers";
const Data = [
  {
    image: librarypic,
    title: "Super deal of a lifetime",
    content: "Get 2 modules at a price of 1 module.",
    link: "KnowMore",
  },
  {
    image: hallpic,
    title: "Books under Rs 599 only",
    content: "5000+ books on Income Tax and Corporate Tax",
    link: "KnowMore",
  },
  {
    image: librarypic,
    title: "Super deal of a lifetime",
    content: "Get 2 modules at a price of 1 module.",
    link: "KnowMore",
  },
  {
    image: hallpic,
    title: "Books under Rs 599 only",
    content: "5000+ books on Income Tax and Corporate Tax",
    link: "KnowMore",
  },
];
const RightSideBar = memo(() => {
  return (
    <>
      <div
        className="d-flex flex-column"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <RightOptions />
      </div>
      <div className="mt-5">
        <strong className="ml-4 ">Offers</strong>
        <div className="container pl-5 mb-5 ">
          {Data.map((item) => {
            return (
              <Offers
                img={item.image}
                title={item.title}
                content={item.content}
                LinkText={item.link}
              ></Offers>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default RightSideBar;
