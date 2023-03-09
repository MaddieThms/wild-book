import React from "react";
import { Skill } from "./Skill";
import blank_profile from "./../assets/blank_profile.png";
import style from "./wilder.module.css";

const Wilder = ({ ...wilder }) => {
  return (
    <article className={style.card}>
      <img src={blank_profile} alt={`${wilder.name} Profile`} />
      <h3>{wilder.name}</h3>
      <ul className={style.skills}>
        {wilder.skills?.map((skill) => (
          <Skill key={skill.id} name={skill.name} votes={skill.votes} />
        ))}
      </ul>
    </article>
  );
};

export default Wilder;
