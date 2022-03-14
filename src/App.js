import React, { useEffect, useState } from "react";
import "./App.css";
import { DateTime } from "./dateTime";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const slidesData = [
    {
      id: 1,
      title: "Image 1",
      label: "This just a label",
    },
    {
      id: 2,
      title: "Image 2",
      label: "This just not a label",
    },
    {
      id: 3,
      title: "Image 3",
      label: "This just woe a label",
    },
    {
      id: 4,
      title: "Image 4",
      label: "This just a label",
    },
    {
      id: 5,
      title: "Image 5",
      label: "This just a label",
    },
    {
      id: 6,
      title: "Image 6",
      label: "This just a label",
    },
  ];
  let [value, setValue] = useState("");

  const checkSize = () => {
    {
      window.innerWidth >= 1100
        ? setValue("slidesData[i].label")
        : setValue("i + 1");
    }
    console.log(value);
  };
  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          color: "black",
          border: "1px solid black",
        }}
      >
        {eval(value)}
      </div>
    ),
  };

  return (
    <div className="App">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {slidesData?.map((slide) => (
            <div className="slick-slide" key={slide.id}>
              <h2 className="slick-slide-title">{slide.title}</h2>
              <img 
                className="slick-slide-image"
                src
                ={`https://picsum.photos/800/400?img=${slide.id}`}
              />
              <span>             
                <label className="slick-slide-label">{slide.label}</label>
                </span>
 
            </div>
          ))}
        </Slider>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <center>
        <DateTime/>
        </center>
      </div>
    </div>
  );
}

export default App;
