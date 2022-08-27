
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
const Home = () => {
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState();
    return (
        <div className={styles.welcome}>
             <h3>Bienvenido a la pagina</h3>
        <h2>Bloz Cell</h2>
        <div className={styles.buttons}>
        <button onClick={() => navigate("/login")}>Login</button>
        </div>
        {mensaje && <div className={styles.toast}>{mensaje}</div>}
        </div>
    );
};

export default Home;