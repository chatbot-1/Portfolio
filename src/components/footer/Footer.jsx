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
            <a href="#cards" className="footer--link">Projects</a>
          </li>
          <li>
            <a href="#education" className="footer--link">Qualifications</a>
          </li>
        </ul>

        <div className="footer--socials">
            <a href="" className="footer--social-link" target="_blank">
                <i class="uil uil-instagram"></i>
            </a>
            <a href="" className="footer--social-link" target="_blank">
                <i class="bx bxl-linkedin"></i>
            </a>
            <a href="" className="footer--social-link" target="_blank">
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
