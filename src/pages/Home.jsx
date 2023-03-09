import React, { useEffect, useState } from "react";
import Wilder from "../components/Wilder";
import style from "./home.module.css";
import "./../App.css";

const Home = () => {
  const [wilders, setWilders] = useState([]);

  const getWilders = async () => {
    const response = await fetch("http://localhost:5000/api/wilder");
    const result = await response.json();
    return setWilders(result);
  };

  useEffect(() => {
    getWilders();
  }, [wilders.length]);

  console.log("wilders", wilders);
  return (
    <div className="App">
      <main className={style.container}>
        <h2>Wilders</h2>
        <section className={style.cardrow}>
          {wilders?.map((wilder) => (
            <Wilder
              key={wilder.id}
              wilder={wilder}
              id={wilder.id}
              name={wilder.name}
              skills={wilder.skills}
              setWilders={setWilders}
              wilders={wilders}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
