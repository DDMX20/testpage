import React, { memo } from "react";
import logo from "../../assets/logo_Taxmann--Tax-&-CL-of-India-for-Web_Sept18 (1).svg";
import googleplay from "../../assets/google-play-badge (1).png";
import appleStore from "../../assets/app-store.png";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Combined_Shape from "../../assets/Combined Shape.svg";
import List from "./List";
const Footer = memo(() => {
  return (
    <div
      className="p-5 mx-5 mt-5 row mx-auto "
      style={{
        backgroundColor: "#F2F2F2",

        marginBottom: "0px",
      }}
    >
      <div className="col">
        <img src={logo} />
        <br></br>
        <div className="mt-5 text-muted">
          Everything you need on Income Tax, GST and Corporate Laws. Authentic
          databases, books, journals, Practice and Exam platforms
        </div>
        <div className="row mt-3">
          <img src={googleplay} className="col-6"></img>
          <img src={appleStore} className="col-6"></img>
        </div>
        <div className="row  mt-3">
          <img src={Facebook} className="col-3"></img>
          <img src={Twitter} className="col-3"></img>
          <img src={Linkedin} className="col-3"></img>
          <img src={Combined_Shape} className="col-3"></img>
        </div>
        <p style={{ fontSize: "10px" }} className=" mt-3 text-muted">
          © 2019 Taxmann.com. All rights reserved.
        </p>
      </div>
      <div className="col row">
        <div className="col-12">
          <List
            heading="products"
            list={[
              "Research",
              "Practice",
              "Exam",
              "Complaince",
              "Taxmann Bookstore",
              "Taxmann Blog",
            ]}
          />
        </div>
        <div className="col-12">
          <List
            heading="About Company"
            list={[
              "History",
              "Board of Directors",
              "Media Coverage",
              "Taxmann Education(CSR)",
              "Careers",
            ]}
          />
        </div>
      </div>
      <div className="col">
        <List
          heading="Catalogue"
          list={[
            "Academic",
            "Professional",
            "Bare Acts",
            "Banking & Finance",
            "NISM Certification Courses",
            "One Solution TDS & ITR",
            "Goods & Services Tax (GST)",
            "LL.B. Series",
            "Insolvency and Bankruptcy",
          ]}
        />
      </div>

      <div className="col row">
        <div className="col-12">
          <List heading="Authors" list={["Academic", "Professional", "A-Z"]} />
        </div>
        <div className="col-12">
          <List
            heading="Bookstore Support"
            list={[
              "Quick Delivery with Fedex",
              "Secured Payment",
              "Free shipping above Rs 350",
              "Missed call support @ 4556 2222",
            ]}
          />
        </div>
      </div>
      <div className="col row">
        <div className="col-12">
          <List
            heading="Business & Support"
            list={[
              "Sell with Taxmann",
              "Locate Dealers",
              "Locate Representatives",
              "Contact Us",
            ]}
          />
        </div>
        <div className="col-12">
          <List
            heading="Legal"
            list={[
              "Privacy Policy",
              "Return Policy",
              "Payment Terms",
              "Disclaimer",
              "EULA",
            ]}
          />
        </div>
      </div>
    </div>
  );
});

export default Footer;
