import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../services/api";

import styles from "./styles.module.scss";

const Welcome = () => {
  const [name, setName] = useState();
  const [user,setUser] = useState([]);
  const [role,setRole] =useState("none");
  const[isAdmin,setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const checkAuth = async() =>{
    let response = await checkToken(token);
    setUser(response.data);
    console.log(user);
  }

  useEffect(() => {
    if(token){
      checkAuth(token);
        if (user.rol === "admin"){    
          setRole("admin");
        }
        else if(user.rol==="seller"){
          setRole("seller");
        }
    }
  }, [token,user,role]);

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  if(role==="admin"){
    return (
      <div className={styles.welcome}>
        <h3>{user.nombre ? `¡Felicitaciones ${user.nombre}!` : "¿Que estas haciendo? 🕵️‍♂️"}</h3>
        <h2>
          {user.nombre ? "Te pudiste logear correctamente🎉" : "Te estamos viendo..."}
        </h2>
        <div className={styles.buttons}>
          <button onClick={e => logout(e)}>Logout </button>
          <button onClick={e => navigate("/users")}> Crud Usuarios</button>
        </div>
      </div>
    );
  }
  else if (role==="seller")
  return(
    <div className={styles.welcome}>
      <h3>{`¡Felicitaciones ${user.nombre}!`}</h3>
      <h2>
        {"Te pudiste logear correctamente🎉"}
      </h2>
      <div className={styles.buttons}>
        <button onClick={e => logout(e)}>Logout </button>
        <button onClick={() =>navigate("/sellerEdit")}> Editar Usuario Propio</button>
      </div>
    </div>
  );
  return(
    <div className={styles.welcome}>
    <h3>¿Que estas haciendo? 🕵️‍♂️</h3>
    <h2>
      Te estamos viendo...
    </h2>
    <div className={styles.buttons}>
    <button onClick={() => navigate("/login")}>Login</button>
    </div>
  </div>
  )
};

export default Welcome;
