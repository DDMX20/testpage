import React, { memo } from "react";
import TaxmannLogo from "../../assets/logo_Taxmann--Tax-&-CL-of-India-for-Web_Sept18.svg";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { Button } from "react-bootstrap";
import Features from "./Features";
import Hamburger from "hamburger-react";
const Header = memo(() => {
  return (
    <div className="col-12 mx-auto  row  bg-white w-100 p-2 border  align-content-center border-bottom-2">
      <div className="col pl-5 pt-2 ">
        <img src={TaxmannLogo}></img>
      </div>
      <div className="col-4  pt-2">
        <SearchBar />
      </div>

      <div className="col-2  pt-2">
        <Dropdown />
      </div>
      <div className="col  pt-2">
        <Button
          className="rounded-pill px-4 border-0 "
          style={{ backgroundColor: "#F88822" }}
        >
          BookStore
        </Button>
      </div>
      <div className="col-2 pt-2">
        <Features />
      </div>
      <div className="col ">
        <div
          className=" rounded-circle px-auto"
          style={{ maxWidth: "45px", backgroundColor: "#F88822" }}
        >
          <Hamburger color="white" size={20} />
        </div>
      </div>
    </div>
  );
});

export default Header;
