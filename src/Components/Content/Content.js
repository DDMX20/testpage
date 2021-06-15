import React, { memo, useState } from "react";
import HomePage from "../HomePage/HomePage";
import Sidebar from "../SideBar/Sidebar";
import Switch from "../switch/Switch";
import MainContent from "../MainContent/MainContent";
import RightSideBar from "../RightSideContent/RightSideBar";
const Content = memo(() => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <HomePage>
      <div className="row  ml-2  " style={{ backgroundColor: "#F2F2F2" }}>
        {/* ////////////////////////////////SIDE BAR//////////////////////////////////////////////////////////////// */}
        <div
          className={`${
            showSidebar ? "col-2" : "col-1"
          } border-right bg-white  pl-5`}
          style={{ height: "100%" }}
        >
          <div className="text-right text-muted ">
            <Switch setShowSidebar={setShowSidebar} />
          </div>
          {showSidebar ? <Sidebar /> : null}
        </div>
        {/* ////////////////////////////////MAIN CONTENT//////////////////////////////////////////////////////// */}
        <div
          className={`${showSidebar ? "col-7" : "col-8"}  mt-5  bg-white`}
          style={{ height: "100%" }}
        >
          <MainContent />
        </div>
        <div
          className={`${
            showSidebar ? "col-3" : "col-3"
          } p-0 rounded border mt-5`}
          style={{ paddingLeft: "25px", backgroundColor: "#F2F2F2" }}
        >
          <RightSideBar />
        </div>
      </div>
    </HomePage>
  );
});

export default Content;
