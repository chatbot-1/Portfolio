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
              Product <br />
              Designer
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
              <h3 className="services--modal-title">Product Designer</h3>
              <p className="services--modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non
                inventore fugit tempora voluptatibus voluptatum quis nulla
                itaque nam rem?
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
                    I position your company brand.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non
                inventore fugit tempora voluptatibus voluptatum quis nulla
                itaque nam rem?
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
                    I position your company brand.
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
              Visual <br /> Designer
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
              <i onClick={()=>toggleTab(0)} className="uil uil-times services--modal-close"></i>
              <h3 className="services--modal-title">Visual Designer</h3>
              <p className="services--modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non
                inventore fugit tempora voluptatibus voluptatum quis nulla
                itaque nam rem?
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
                    I position your company brand.
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
      </div>
    </section>
  );
};
