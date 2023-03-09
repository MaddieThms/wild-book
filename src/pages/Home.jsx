import React, { useEffect, useState } from "react";
import Wilder from "../components/Wilder";
import style from "./home.module.css";
import "./../App.css";

const Home = () => {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/wilder")
      .then((response) => response.json())
      .then((result) => setWilders(result))
      .catch((error) => console.log("error"));
  }, []);

  console.log("wilders", wilders);
  return (
    <div className="App">
      <main className={style.container}>
        <h2>Wilders</h2>
        <section className={style.cardrow}>
          {wilders?.map((wilder) => (
            <Wilder key={wilder.id} {...wilder} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
