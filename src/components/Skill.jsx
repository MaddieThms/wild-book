import React from "react";
import style from "./skill.module.css";

export const Skill = ({ name, votes }) => {
  return (
    <li className={style.skill}>
      {name}
      <span className={style.votes}>{votes}</span>
    </li>
  );
};
