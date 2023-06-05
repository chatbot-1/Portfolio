import React from "react";
import "./about.css";
import aboutImg from "../../assets/about.jpg";
import resume from "../../assets/resume.pdf";
import { Infor } from "./Infor";

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section--title">About me</h2>
      <span className="section--subtitle">My Introduction</span>

      <div className="about--container container grid">
        <img src={aboutImg} alt="" className="about--img" />
        <div className="about--data">
          <Infor />
          <p className="about--description">
            I'm frontend developer and I create Web Apps using ReactJS. Some
            other tech stacks I use are JavaScript, Java, Firebase, HTML/CSS,
            ThreeJS, MySQL, Python.
          </p>
          <a download="" href={resume} className="button button--flex">
            Download Resume
            <i class="uil uil-file-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
