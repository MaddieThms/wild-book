import React from "react";
import { Skill } from "./Skill";
import blank_profile from "./../assets/blank_profile.png";
import style from "./wilder.module.css";

const Wilder = ({ name, skills }) => {
  return (
    <article className={style.card}>
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <ul className={style.skills}>
        {skills?.map((skill) => (
          <Skill key={skill.id} name={skill.name} votes={skill.votes} />
        ))}
      </ul>
    </article>
  );
};

export default Wilder;
