import React from "react";
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--container container">
        <h1 className="footer--title">Atul</h1>

        <ul className="footer--list">
          <li>
            <a href="#about" className="footer--link">About</a>
          </li>
          <li>
            <a href="#card" className="footer--link">Projects</a>
          </li>
          <li>
            <a href="#educa" className="footer--link">Qualifications</a>
          </li>
        </ul>

        <div className="footer--socials">
            <a href="https://github.com/chatbot-1" className="footer--social-link" target="_blank">
                <i class="uil uil-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/atul-singh-1091131ba/" className="footer--social-link" target="_blank">
                <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://twitter.com/itsmeatul_" className="footer--social-link" target="_blank">
                <i class="bx bxl-twitter"></i>
            </a>
        </div>

        <span className="footer--copy">
            &#169; atulsingh. All rights reserved
        </span>

      </div>
    </footer>
  );
}
