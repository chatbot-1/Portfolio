import React from "react";
import "./educa.css";

export const Educa = () => {
  const [toggleState, setToggleState] = React.useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="educa section">
      <h2 className="section--title">Qualifications</h2>
      <span className="section--subtitle">My personal journey</span>
      <div className="educa--container container">

        <div className="educa--tabs">
          <div
            className={
              toggleState === 1
                ? "educa--button educa--active button--flex"
                : "educa--button button--flex"
            }
            onClick = {()=>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap educa--icon"></i>Education
          </div>
          <div
            className={
              toggleState === 1
                ? "educa--button educa--active button--flex"
                : "educa--button button--flex"
            }
            onClick = {()=>toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt educa--icon"></i>Experience
          </div>
        </div>

        <div className="educa--sections">

          <div
            className={
              toggleState === 1
                ? "educa--content educa--content-active"
                : "educa--content"
            }
          >
            <div className="educa--data">
              <div>
                <h3 className="educa--title">Web Design</h3>
                <span className="educa--subtitle">
                  IIMT College Of engineering
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - present
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Web Development</h3>
                <span className="educa--subtitle">
                  IIMT College Of engineering
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - present
                </div>
              </div>
            </div>

            <div className="educa--data">
              <div>
                <h3 className="educa--title">Java Development</h3>
                <span className="educa--subtitle">
                  IIMT College Of engineering
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - present
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Database Management</h3>
                <span className="educa--subtitle">
                  IIMT College Of engineering
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - present
                </div>
              </div>
            </div>
          </div>

          <div className={
              toggleState === 2
                ? "educa--content educa--content-active"
                : "educa--content"
            }>
            <div className="educa--data">
              <div>
                <h3 className="educa--title">High School Education</h3>
                <span className="educa--subtitle">
                  IIMT College Of engineering
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - present
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Secondary Education</h3>
                <span className="educa--subtitle">
                  IIMT College Of engineering
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - present
                </div>
              </div>
            </div>

            <div className="educa--data">
              <div>
                <h3 className="educa--title">FEA - Graduation</h3>
                <span className="educa--subtitle">
                  IIMT College Of engineering
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - present
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Under-Graduation</h3>
                <span className="educa--subtitle">
                  IIMT College Of engineering
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - present
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
