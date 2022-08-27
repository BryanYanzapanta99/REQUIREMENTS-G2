import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

const Welcome = () => {
  const [name, setName] = useState();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:4000/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);
  
  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className={styles.welcome}>
      <h3>{name ? `¡Felicitaciones ${name}!` : "¿Que estas haciendo? 🕵️‍♂️"}</h3>
      <h2>
        {name ? "Te pudiste logear correctamente🎉" : "Te estamos viendo..."}
      </h2>
      <div className={styles.buttons}>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/")}>Register</button>
        <button onClick={e => logout(e)}>Logout </button>
        <button onClick={e => navigate("/users")}> Crud Usuarios</button>
      </div>
    </div>
  );
};

export default Welcome;
