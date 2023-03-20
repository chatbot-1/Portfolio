import React from 'react'
import "./skill.css"
import { Frontend } from './Frontend'
import { Backend } from './Backend'

export const Skill = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section--title">Skills</h2>
        <span className="section--subtitle">My Technical Skills</span>

        <div className="skills--container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}
