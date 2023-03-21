import React from "react";
import "./service.css";

export const Service = () => {
  const [toggleState, setToggleState] = React.useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section--title">Services</h2>
      <span className="section--subtitle">What I Offer</span>

      <div className="services--container container grid">
        <div className="services--content">
          <div>
            <i className="uil uil-web-grid services--icon"></i>
            <h3 className="services--title">
              Frontend <br />
              Developer
            </h3>
          </div>
          <span className="services--button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services--button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services--modal active-modal"
                : "services--modal"
            }
          >
            <div className="services--modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services--modal-close"
              ></i>
              <h3 className="services--modal-title">Frontend Developer</h3>
              <p className="services--modal-description">
                I use ReactJS Library to create the user interative & responsive
                web apps with the help of Javascript and tailwind CSS
              </p>
              <ul className="services--modal-services grid">
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    Uses the Three.js to create the animations.
                  </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    Help with hosting the websites.
                  </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    I work with the frontend team.
                  </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    Open Source Contributions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services--content">
          <div>
            <i className="uil uil-arrow services--icon"></i>
            <h3 className="services--title">
              UI/UX <br /> Designer
            </h3>
          </div>
          <span className="services--button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services--button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services--modal active-modal"
                : "services--modal"
            }
          >
            <div className="services--modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services--modal-close"
              ></i>
              <h3 className="services--modal-title">UI/UX Designer</h3>
              <p className="services--modal-description">
                By Using HTML and CSS I can create minimalistic user interface
                for the appropriate task.
              </p>
              <ul className="services--modal-services grid">
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">Web Page Development</p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    Help with hosting the websites.
                  </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    I can create the multipages web app.
                  </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    Design and markups of product for comapnies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services--content">
          <div>
            <i className="uil uil-edit services--icon"></i>
            <h3 className="services--title">
              Java <br /> Developer
            </h3>
          </div>
          <span className="services--button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services--button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services--modal active-modal"
                : "services--modal"
            }
          >
            <div className="services--modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services--modal-close"
              ></i>
              <h3 className="services--modal-title">Java Developer</h3>
              <p className="services--modal-description">
                I use Java in data structure and algorithm's and object oriented
                programming
              </p>
              <ul className="services--modal-services grid">
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    Data structure and algorithm's.
                  </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    100+ submission on the Leetcode.
                    </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    Rank 30 in the in Geeksforgeeks platform at college level.
                  </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    Competetive programming using Java.
                  </p>
                </li>
                <li className="services--modal-service">
                  <i className="uil uil-check-circle services--modal-icon"></i>
                  <p className="services--modal-info">
                    Sometimes I use Java as a backend in the development.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
