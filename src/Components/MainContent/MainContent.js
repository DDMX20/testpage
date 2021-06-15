import React, { memo, useState } from "react";
import CarouselSection from "./Carousel";
import ItemContainerComp from "./ItemComponent/ItemContainerComp";
const Data = [
  {
    ContainerName: "Recomended For You",
    link: "#",
  },
  {
    ContainerName: "New Releases",
    link: "#",
  },
];
const MainContent = memo(() => {
  return (
    <div className="row ">
      <div className="col-12  mt-5 ">
        <CarouselSection />
      </div>

      <div className="col-12 row mx-auto">
        {Data.map((item) => (
          <ItemContainerComp
            ContainerName={item.ContainerName}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
});

export default MainContent;
