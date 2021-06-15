import React, { memo, useState } from "react";
import { Carousel } from "react-bootstrap";
import CarosouleImage from "../../assets/image3.png";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const CarouselSection = memo(() => {
  const [next, setNext] = useState(0);
  const handleNextClick = () => {
    next == 3 ? setNext(0) : setNext(next + 1);
  };
  const handlePrevClick = () => {
    next == 0 ? setNext(3) : setNext(next - 1);
  };
  return (
    <div className="row">
      <div
        className="col-1 d-flex flex-column h-100 mt-auto mb-auto"
        onClick={handlePrevClick}
      >
        <FaAngleLeft
          color="orange"
          size={30}
          className="border border-1 rounded-circle"
        />
      </div>
      <div className="col-10 border rounded p-0 ">
        <Carousel variant="dark" activeIndex={next} nextIcon="" prevIcon="">
          <Carousel.Item>
            <div className="row">
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={CarosouleImage}
                  height={250}
                  alt="First slide"
                />
              </div>
              <div className="col-6">
                <Carousel.Caption>
                  <h3 style={{ color: "orange" }}>Subscription 2019</h3>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Boost your Practice
                  </p>
                  <p style={{ color: "black", fontSize: "12px" }}>
                    An all encompassing , authentic and update plateform
                  </p>
                  <Button
                    className="border-0"
                    style={{ backgroundColor: "orange", borderRadius: "25px" }}
                  >
                    Know More
                  </Button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={CarosouleImage}
                  height={250}
                  alt="First slide"
                />
              </div>
              <div className="col-6">
                <Carousel.Caption>
                  <h3 style={{ color: "orange" }}>Subscription 2019</h3>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Boost your Practice
                  </p>
                  <p style={{ color: "black", fontSize: "12px" }}>
                    An all encompassing , authentic and update plateform
                  </p>
                  <Button
                    className="border-0"
                    style={{ backgroundColor: "orange", borderRadius: "25px" }}
                  >
                    Know More
                  </Button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={CarosouleImage}
                  height={250}
                  alt="First slide"
                />
              </div>
              <div className="col-6">
                <Carousel.Caption>
                  <h3 style={{ color: "orange" }}>Subscription 2019</h3>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Boost your Practice
                  </p>
                  <p style={{ color: "black", fontSize: "12px" }}>
                    An all encompassing , authentic and update plateform
                  </p>
                  <Button
                    className="border-0"
                    style={{ backgroundColor: "orange", borderRadius: "25px" }}
                  >
                    Know More
                  </Button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={CarosouleImage}
                  height={250}
                  alt="First slide"
                />
              </div>
              <div className="col-6">
                <Carousel.Caption>
                  <h3 style={{ color: "orange" }}>Subscription 2019</h3>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    Boost your Practice
                  </p>
                  <p style={{ color: "black", fontSize: "12px" }}>
                    An all encompassing , authentic and update plateform
                  </p>
                  <Button
                    className="border-0"
                    style={{ backgroundColor: "orange", borderRadius: "25px" }}
                  >
                    Know More
                  </Button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-1  mt-auto mb-auto" onClick={handleNextClick}>
        <FaAngleRight
          color="orange"
          size={30}
          className="border border-1 rounded-circle"
        />
      </div>
    </div>
  );
});

export default CarouselSection;
