import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./AboutUs.css";

import banner from "../assets/aboutus-banner.png";
import atdcelogo from "../assets/logo 2.png";
import banner2 from "../assets/a-banner2.png";

import hist1 from "../assets/hist1.png";
import hist2 from "../assets/hist2.png";
import hist3 from "../assets/hist3.png";

import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";

export default function AboutUs() {
  return (
    <div>
      <div className="a-banner-container">
        <img src={banner} alt="" className="aboutus-banner" />
        <div className="a-center-logo">
          <img src={atdcelogo} alt="" className="atdce-logo" />
        </div>
      </div>
      <div className="a-content1-bg">
        <div className="a-content1">
          <h3> About Us</h3>
          <p>
            The Tunisian Association for Electronic Culture Development (ATDCE)
            empowers youth and promotes digital culture in Tunisia. Since 2019,
            it has supported young creators, fostered innovation, and advocated
            for positive digital change. With a focus on capacity-building and
            community engagement, ATDCE provides economic opportunities and
            resources for youth in the digital sector.
          </p>
        </div>
      </div>
      <div className="a-content2">
        <h3>Our Vision</h3>
        <p>
          We work towards the ultimate goal of uniting a large community that
          can have a positive impact on Tunisia and bring it into the 21st
          century. To that end, we offer content, training, events, talks, etc.
        </p>
      </div>
      <img src={banner2} alt="" className="a-banner2" />
      <div className="a-content3">
        <h3>Our Mission</h3>
        <p>
          Through creative projects, we strive to bring Tunisia into the digital
          age. To date, projects like BO3, BOUBLI, and Freesh are references
          among Tunisian young generations. More details can be found in the
          “Projects” section.
        </p>
        <p>
          We work towards the ultimate goal of uniting a large community that
          can have a positive impact on Tunisia and bring it into the 21st
          century. To that end, we offer content, training, events, talks, etc.
        </p>
      </div>
      <div className="a-content4">
        <h3> History</h3>
      </div>
      <div className="a-content5-wrap">
        <Splide options={{ type: 'loop', perPage: 3, autoplay: true, gap: '1rem',arrows: false }} className="a-content5">
          {[hist1, hist2, hist3].map((histImage, index) => (
            <SplideSlide key={index}>
              <div className="a-imgset">
                <img src={histImage} alt={`History ${index + 1}`} className="a-imgset-item" />
                <p> {2022 + index}</p>
                <h3>{index === 0 ? "Ramadhan Activities" : index === 1 ? "Gang’lab" : "Transportation talk"}</h3>
                <p>{index === 0 ? "A series of Ramadan activities, including iftar gatherings." : index === 1 ? "A training series to educate content creators." : "Raising awareness about transportation in Tunisia and its associated challenges."}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <hr className="au-hr"></hr>
      </div>
      <div className="a-setifvids">
        <img src={v2} alt="" className="a-vid-item" />
        <img src={v1} alt="" className="a-vid-item" />
        <img src={v3} alt="" className="a-vid-item" />
      </div>
      <div className="a-title">
        <h1> Become A Partner </h1>
      </div>

      <div className="page-content3">
        <hr></hr>
        <div className="page-btm">
          <div className="socials">
            <p style={{ margin: "0px", fontWeight: 600, fontSize: "12px" }}>
              Share Page
            </p>
          </div>
          <div className="btp">
            <p style={{ margin: "0px", fontWeight: 600, fontSize: "12px" }}>
              {" "}
              Back to Top
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
