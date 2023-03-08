import React from 'react'

export const Skill = ({name, votes}) => {
  return (
    <li>{name}
        <span className='votes'>{votes}</span>
    </li>
  )
}
