import React from 'react'
import "./card.css"
import work1 from "../../assets/work1.jpg"
import work2 from "../../assets/work2.jpg"
import work3 from "../../assets/work3.jpg"
import work4 from "../../assets/work4.jpg"

export const Card = () => {
  return (
    <section className="card section" id="card">
      <div className="card--container container">
        <h2 className='section--title'>Projects</h2>
        <span className='section--subtitle'>Works I've done</span>

        <div className="cards--container container">

          <article className='card--item'>
            <div className="card--item-image">
              <img src={work1} alt="" srcset="" />
            </div>
            <h3>Title</h3>
            <div className="btnn">
              <div>
                <a className="btn">GitHub</a>
              </div>
              <div>
                <a className="btn">Demo</a>
              </div>
            </div>
          </article>

          <article className='card--item'>
            <div className="card--item-image">
              <img src={work2} alt="" srcset="" />
            </div>
            <h3>Title</h3>
            <div className="btnn">
              <div>
                <a className="btn">GitHub</a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
              <div>
                <a className="btn">Demo</a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
            </div>
          </article>

          <article className='card--item'>
            <div className="card--item-image">
              <img src={work3} alt="" srcset="" />
            </div>
            <h3>Title</h3>
            <div className="btnn">
              <div>
                <a className="btn">GitHub</a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
              <div>
                <a className="btn">Demo</a>
                {/* <i className="uil uil-arrow-right services--button-icon"></i> */}
              </div>
            </div>
          </article>

          <article className='card--item'>
            <div className="card--item-image">
              <img src={work4} alt="" srcset="" />
            </div>
            <h3>Title</h3>
            <div className="btnn">
              <div>
                <a className="btn">GitHub</a>
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
  )
}
