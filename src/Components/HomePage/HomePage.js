import React, { memo } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const HomePage = memo((props) => {
  return (
    <div className="row">
      {" "}
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
});

export default HomePage;
