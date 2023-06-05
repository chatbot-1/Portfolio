import React from "react";
import "./card.css";
import black from "../../assets/black.png";
import space from "../../assets/space.png";
import tutor from "../../assets/tutor.jpg";
import tesla from "../../assets/tesla.jpg";
import health from "../../assets/health.png"
import unimart from "../../assets/unimart.png"
import sportOn from "../../assets/sportOn.png"

export const Card = () => {
  return (
    <section className="card section" id="card">
      <div className="card--container container">
        <h2 className="section--title">Projects</h2>
        <span className="section--subtitle">Works I've done</span>

        <div className="cards--container container">

          <article className="card--item">
            <div className="card--item-image">
              <img src={unimart} alt="" srcset="" />
            </div>
            <h3>Unimart</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/notnotrachit/unimart"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a href="https://unimart.rachitkhurana.repl.co/" className="btn">Demo</a>
              </div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={sportOn} alt="" srcset="" />
            </div>
            <h3>SportOn</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/chatbot-1/sports-on-web"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a href="https://sportsonweb.netlify.app/" className="btn">Demo</a>
              </div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={health} alt="" srcset="" />
            </div>
            <h3>The Health.Aura</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/chatbot-1/healthaura"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a href="https://healthaura.netlify.app/" className="btn">Demo</a>
              </div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={space} alt="" srcset="" />
            </div>
            <h3>SpaceX Clone</h3>
            <div className="btnn">
              <div>
                <a
                  href="https://github.com/chatbot-1/spaceX_clone"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a href="https://chatbot-1.github.io/spaceX_clone/" className="btn">Demo</a>
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
                <a href="https://chatbot-1.github.io/tesla_webpage/" className="btn">Demo</a>
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
                  href="https://github.com/chatbot-1/tutorValley"
                  className="btn" target="_blank"
                >
                  GitHub
                </a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
              <div>
                <a href="https://chatbot-1.github.io/tutorValley/" className="btn">Demo</a>
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
                <a href="https://github.com/chatbot-1/blackjack" className="btn" target="_blank">GitHub</a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
              <div>
                <a href="https://chatbot-1.github.io/blackjack/" className="btn">Demo</a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
