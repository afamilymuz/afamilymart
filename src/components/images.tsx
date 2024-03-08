import React from "react";
import ImageComponent from "./imageComponent";
import BannerImageComponent from "./bannerImage";

function Images() {
  return (
    <>
      <BannerImageComponent />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-16">
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
      </div>
    </>
  );
}

export default Images;
