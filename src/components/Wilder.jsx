import React from "react";
import { Skill } from "./Skill";
import blank_profile from "./../assets/blank_profile.png";
import style from "./wilder.module.css";

const Wilder = ({ id, name, skills, wilder, setWilders, wilders }) => {
  const deleteWilder = async () => {
    const requestOptions = {
      method: "DELETE",
    };
    await fetch(
      `http://localhost:5000/api/wilder/${wilder.id}`,
      requestOptions
    );
    setWilders(wilders.filter((wilder) => wilder.id !== id));
  };

  return (
    <div>
      <button
        type="button"
        className={style.delete}
        onClick={() => {
          deleteWilder();
        }}
      >
        Delete
      </button>
      <article className={style.card}>
        <img src={blank_profile} alt={`${name} Profile`} />
        <h3>{name}</h3>
        <ul className={style.skills}>
          {skills?.map((skill) => (
            <Skill key={skill.id} name={skill.name} votes={skill.votes} />
          ))}
        </ul>
        <h3>Add skill</h3>
        <select>
          <option value="">...</option>
          <option value="PHP">PHP</option>
          <option value="JS">JS</option>
          <option value="Node">Node</option>
          <option value="React">React</option>
        </select>
      </article>
    </div>
  );
};

export default Wilder;
