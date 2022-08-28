

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Img from '../assets/images/blozcell.png';

import styles from "./styles.module.scss";
const Home = () => {
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState();
    return (
        <div className={styles.welcome}>
         <div className={styles.face}>   
        <h2>Bloz Cell</h2>
        <h3>Accesorio, Celulares y Servicio Tecnico</h3>
        </div>
        

        <img className={styles.images} src ={Img} alt="logo"/>
        <div className={styles.buttons}>
        <button onClick={() => navigate("/login")}>Login</button>
        </div>
        {mensaje && <div className={styles.toast}>{mensaje}</div>}
        </div>



    );
};

export default Home;