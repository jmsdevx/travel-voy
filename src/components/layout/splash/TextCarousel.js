import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TextCarousel() {
  return (
    <div className="text-carousel">
      <Carousel>
        <p>Where do you want to go?</p>
        <p>What do you want to do?</p>
        <p>Who do you want to be with?</p>
      </Carousel>
    </div>
  );
}

export default TextCarousel;
