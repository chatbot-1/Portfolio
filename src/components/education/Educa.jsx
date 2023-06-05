import React from "react";
import "./educa.css";

export const Educa = () => {
  const [toggleState, setToggleState] = React.useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="educa section" id="educa">
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
            onClick={() => toggleTab(1)}
            >
            <i className="uil uil-briefcase-alt educa--icon"></i>Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "educa--button educa--active button--flex"
                : "educa--button button--flex"
            }
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-graduation-cap educa--icon"></i>Education
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
                <h3 className="educa--title">Entrepreneurial intern</h3>
                <span className="educa--subtitle">
                  IIT Madras
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>Aug 2021 - Feb 2022
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
                <h3 className="educa--title">Project Intern</h3>
                <span className="educa--subtitle">
                  Final Project
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> April 2023 - May 2023
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "educa--content educa--content-active"
                : "educa--content"
            }
          >
            <div className="educa--data">
              <div>
                <h3 className="educa--title">High School Education</h3>
                <span className="educa--subtitle">
                  Central Academy sr. sec. school, Rewa (M.P.)
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2016 - 2017
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
                <h3 className="educa--title">Senior Secondary Education</h3>
                <span className="educa--subtitle">
                  Central Academy sr. sec. school, Rewa (M.P.)
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2019
                </div>
              </div>
            </div>

            <div className="educa--data">
              <div>
                <h3 className="educa--title">Personality Development</h3>
                <span className="educa--subtitle">
                  Freedom English Academy, New Delhi
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2019 - 2020
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
                  IIMT College Of engineering, Greater Noida
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2024(expected)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
