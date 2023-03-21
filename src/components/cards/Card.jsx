import React from "react";
import "./card.css";
import black from "../../assets/black.png";
import space from "../../assets/space.png";
import tutor from "../../assets/tutor.jpg";
import tesla from "../../assets/tesla.jpg";

export const Card = () => {
  return (
    <section className="card section" id="card">
      <div className="card--container container">
        <h2 className="section--title">Projects</h2>
        <span className="section--subtitle">Works I've done</span>

        <div className="cards--container container">
          <article className="card--item">
            <div className="card--item-image">
              <img src={space} alt="" srcset="" />
            </div>
            <h3>SpaceX Clone</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/chatbot-1/SpaceX_Clone/tree/master"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a className="btn">Demo</a>
              </div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={tesla} alt="" srcset="" />
            </div>
            <h3>Tesla Clone</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/chatbot-1/tesla_webpage/tree/master"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
              <div>
                <a className="btn">Demo</a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={tutor} alt="" srcset="" />
            </div>
            <h3>TutorsValley</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/chatbot-1/tutorvally_webpage2/tree/master"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
              <div>
                <a className="btn">Demo</a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={black} alt="" srcset="" />
            </div>
            <h3>Blackjack</h3>
            <div className="btnn">
              <div>
                <a href="https://github.com/chatbot-1/Blackjack" className="btn" target="_blank">GitHub</a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
              <div>
                <a className="btn">Demo</a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
