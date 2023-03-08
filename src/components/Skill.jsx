import React from 'react'
import "./skill.css"

export const Skill = ({name, votes}) => {
  return (
    <li className="skill">{name}
        <span className="votes">{votes}</span>
    </li>
  )
}
