import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { editPassword } from "../services/api";
import { checkToken, getUsers,deleteUserRest } from "../services/api";

import styles from "./styles.module.scss";

const SellerEdit = () => {
    const [inputs, setInputs] = useState({
        contraseña: "",
        nuevaContraseña:""
      });
      const [mensaje, setMensaje] = useState();
      const [loading, setLoading] = useState(false);
      const [user,setUser]= useState([]);
      const token = localStorage.getItem("token");

      const url = window.location.pathname;
      const lastSegment = url.split("/").pop();
    
      const navigate = useNavigate();
    
      const {contraseña,nuevaContraseña } = inputs;

      const checkAuth = async() =>{
        let response = await checkToken(token);
        setUser(response.data);
      }

      useEffect(() => {
        checkAuth(token);

    }, [token,user]);

      const HandleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        
        if (contraseña !== nuevaContraseña) {
            setMensaje("Contraseñas no coinciden")
        }else{
          const Usuario = {
            nuevaContraseña,
          };
          setLoading(true);
          await editPass();
          setLoading(false);
        }
      };

      const editPass = async () =>{
        let response = await editPassword(user._id,nuevaContraseña);
        
      }

    return (
        <>
            <div className={styles.formContainer}>
            <h3>Actualice la contraseña</h3>
            <h2></h2>
            <form onSubmit={(e) => onSubmit(e)}>
            <div className={styles.inputContainer}>
                <div className={styles.left}>
                  <label htmlFor="nombre">Nueva Contraseña</label>
                  <input
                    onChange={(e) => HandleChange(e)}
                    value={contraseña}
                    name="contraseña"
                    id="contraseña"
                    type="password"
                    placeholder="Contraseña..."
                    autoComplete="off"
                  />
                </div>
                <svg
                  viewBox="0 0 30 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 7.41419C7.5 11.5019 10.865 14.8284 15 14.8284C19.135 14.8284 22.5 11.5019 22.5 7.41419C22.5 3.3265 19.135 0 15 0C10.865 0 7.5 3.3265 7.5 7.41419ZM28.3333 31.3043H28.3524C29.2623 31.3043 30 30.5667 30 29.6568C30 23.2987 24.765 18.1236 18.3333 18.1236H11.6667C5.23333 18.1236 0 23.2987 0 29.6568C0 30.5667 0.737655 31.3043 1.6476 31.3043H28.3333Z"
                    fill="black"
                  />
                </svg>
              </div>
    
              <div className={styles.inputContainer}>
                <div className={styles.left}>
                  <label htmlFor="nuevaContraseña">Confirmar Contraseña</label>
                  <input
                    onChange={(e) => HandleChange(e)}
                    value={nuevaContraseña}
                    name="nuevaContraseña"
                    id="nuevaContraseña"
                    type="password"
                    placeholder="Nueva Contraseña..."
                    autoComplete="off"
                  />
                </div>
                <svg
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 5.295C27 5.73357 26.7741 6.14121 26.4022 6.37365L19.24 10.85C16.6458 12.4714 13.3542 12.4714 10.76 10.85L3.59784 6.37365C3.22593 6.14121 3 5.73357 3 5.295C3 4.29593 4.09894 3.68684 4.94615 4.21635L11.9126 8.57039C13.8016 9.75099 16.1984 9.75099 18.0874 8.57039L25.0538 4.21635C25.9011 3.68684 27 4.29593 27 5.295Z"
                    fill="black"
                  />
                </svg>
              </div>
          <button type="submit">
                {loading ? "Cargando..." : "Registrarme"}
            </button>
          </form>
          </div>
          </>
    );
};

export default SellerEdit;