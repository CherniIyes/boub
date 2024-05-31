import React, { useState, useEffect } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./Partners.css";
import HeroSec from "../components/HeroSec.jsx";

import bebbhar from "../assets/bab bhar 1@2x.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";

import banner from "../assets/p-banner.png";

import pr1 from "../assets/pr1.png";
import pr2 from "../assets/pr2.png";
import pr3 from "../assets/pr3.png";

import pwu from "../assets/pwu.png";
import axios from 'axios';

const images = [pr1, pr2, pr3];

export default function Partners() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const HeroSecData = {
    title: "Partner With Us",
    subtitle: "Let's Make Wonders Together!",
    description1:
      "We aim to uplift marginalized voices and drive positive change in the digital sphere. Join us on this journey towards a more inclusive and vibrant digital landscape, made possible through our various projects.",
    description2:
      "Join us in amplifying marginalized voices and fostering positive digital transformation. Together, let's shape an inclusive digital community through our diverse projects.",
    Img: [bebbhar],
  };

  useEffect(() => {
    axios.get('http://localhost:8081/partners/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8081/collaborators/')
      .then(res => setData1(res.data))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div className="">
      <HeroSec {...HeroSecData} />
      <div className="partner-content">
        <h3>Who are our current partners?</h3>
        <Splide options={{ type: 'loop', perPage: 1, autoplay: true, gap: '1rem' }} className="partner-carousel">
          {data.map((event, index) => (
            <SplideSlide key={index}>
              <div className="partner-images-container">
                <img className='partner-img-item' src={event.image1} alt="" />
                <img className='partner-img-item' src={event.image2} alt="" />
                <img className='partner-img-item' src={event.image3} alt="" />
                <img className='partner-img-item' src={event.image4} alt="" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <h3>Our Previous Collaborators</h3>
        <Splide options={{ type: 'loop', perPage: 1, autoplay: true, gap: '1rem' }} className="partner-carousel">
          {data1.map((event, index) => (
            <SplideSlide key={index}>
              <div className="partner-images-container">
                <img className='partner-img-item' src={event.image5} alt="" />
                <img className='partner-img-item' src={event.image6} alt="" />
                <img className='partner-img-item' src={event.image7} alt="" />
                <img className='partner-img-item' src={event.image8} alt="" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <img src={banner} alt="" className="partner-img-banner" />
      <div className="partner-content">
        <h3>Discover partnerships Projects</h3>
        <div className="p-image-container">
          {images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt="" />
          ))}
        </div>
        <div className="p-partner-w-us">
          <div className="p-partner-w-us-left">
            <h3>Partner With Us</h3>
            <h4>Let's Build The Future</h4>
            <p>
              ATDCE focuses on empowering youth and promoting electronic
              culture. Through various initiatives, ATDCE provides opportunities
              for young people to engage with electronic arts and technology,
              fostering creativity and innovation in the digital realm.
            </p>
          </div>
          <div className="p-partner-w-us-right p-image-container">
            <img src={pwu} alt="" />
          </div>
        </div>
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
