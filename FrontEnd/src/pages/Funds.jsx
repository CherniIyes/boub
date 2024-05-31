import React, { useState, useEffect } from "react";
import "./Funds.css";
import HeroSec from "../components/HeroSec.jsx";

import tones from "../assets/MAP 1.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import partnershiprec1 from "../assets/partnershiprec1.png";
import pdf from "../assets/iyed_amris_resume.pdf";
import axios from 'axios';

export default function Funds() {
  const [data, setData] = useState([]);
  const HeroSecData = {
    title: "Funds",
    subtitle: "Funds and Aids",
    description1:
      "As an NGO, we need funds to effectively support our mission, sustain our programs, and create a lasting impact in our communities.As an NGO, we need funds to effectively support our mission, sustain our programs, and create a lasting impact in our communities.As an NGO, we need funds to effectively support our mission, sustain our programs, and create a lasting impact in our communities.As an NGO, we need funds to effectively support our mission, sustain our programs, and create a lasting impact in our communities.As an NGO, we need funds to effectively support our mission, sustain our programs, and create a lasting impact in our comm",
    Img: [tones],
  };

  useEffect(() => {
    axios.get('http://localhost:8081/funds/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <HeroSec {...HeroSecData} />
      <div className="c-content-1">
        <h3>the list of funds acquired by ATDCE </h3>
        <h3> Reports</h3>
        
        <div className="f-set">
          {data.map((event, index) => (
            <div className="f-set-1" key={index}>
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                <img className="f-set-i" src={event.image} alt="" />
              </a>
              <h5>{event.date}</h5>
            </div>
          ))}
        </div>

        <h3>Tunisian NGO’s</h3>
        <p>
          NGOs in Tunisia play a crucial role in addressing various social,
          economic, and environmental challenges. These organizations, driven by
          passion and dedication, work tirelessly to advocate for human rights,
          provide essential services, and foster community development. They
          serve as catalysts for positive change, empowering marginalized
          groups, promoting civic engagement, and amplifying voices that often
          go unheard. Despite facing obstacles such as limited resources and
          bureaucratic hurdles, NGOs in Tunisia continue to make significant
          strides in advancing the nation's progress towards a more equitable
          and sustainable future.
        </p>
        <p>
          ATDCE collaborates with NGOs in Tunisia to amplify their impact and
          support their vital initiatives. Together, we strive to address
          pressing social issues and drive positive change in communities across
          the country. Join us in partnership with ATDCE to strengthen the role
          of NGOs and build a brighter future for Tunisia.
        </p>
        <div className="part-content-5">
          <div className="part-content-5-in">
            <h3> Partnership Inquiries</h3>
            <h5> Zemni Norchene</h5>
            <h6> Vice President Of Vice President</h6>
            <p> Zemninorchene01@Gmail.com</p>
          </div>
          <img src={partnershiprec1} alt="" />
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
