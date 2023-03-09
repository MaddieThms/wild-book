import React, { useState } from "react";
import style from "./addWilder.module.css";

const AddWilder = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const addWilder = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      name,
      city,
      email,
    });

    fetch("http://localhost:5000/api/wilder", {
      method: "POST",
      redirect: "follow",
      body: raw,
      headers: myHeaders,
    });
  };

  return (
    <main className={style.container}>
      <h2>Register as a new Wilder</h2>
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          addWilder();
        }}
      >
        <div className={style.formElement}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
        </div>
        <div className={style.formElement}>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <br />
        </div>
        <div className={style.formElement}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
        </div>

        <button className={style.button}>Add Wilder</button>
      </form>
    </main>
  );
};

export default AddWilder;
