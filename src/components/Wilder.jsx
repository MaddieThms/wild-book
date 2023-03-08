import React from 'react'
import { Skill } from './Skill'
import blank_profile from "./../assets/blank_profile.png"
import "./wilder.css"

const Wilder = ({...wilder}) => {

  return (
    <article className="card">
        <img src={blank_profile} alt={`${wilder.name} Profile`} />
        <h3>{wilder.name}</h3>
        <ul className="skills">
        {wilder.skills.map((skill)=>(<Skill name={skill.title} votes={skill.votes} />))}

        </ul>
    </article>
  )
}

export default Wilder