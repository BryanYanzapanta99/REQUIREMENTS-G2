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
          navigate("/welcome");
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
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7474 23.7499C13.7488 23.7499 13.7499 23.751 13.7499 23.7524V24.9999C13.7499 25.3314 13.6182 25.6493 13.3838 25.8837C13.1494 26.1182 12.8314 26.2498 12.4999 26.2498H11.2499C10.5596 26.2498 9.99994 26.8095 9.99994 27.4998C9.99994 28.1629 9.73655 28.7988 9.26771 29.2676C8.79887 29.7364 8.16299 29.9998 7.49996 29.9998H2.49999C1.83695 29.9998 1.20107 29.7364 0.732229 29.2676C0.26339 28.7988 0 28.1629 0 27.4998V24.2674C0.000141593 23.6044 0.263625 22.9686 0.732496 22.4999L7.04801 16.1844C9.11881 14.1136 9.62828 11.0007 10.1776 8.12409C10.2709 7.63574 10.4008 7.15289 10.5674 6.67969C11.2646 4.69889 12.5678 2.98785 14.292 1.78918C16.0162 0.590515 18.074 -0.0349387 20.1736 0.00150694C22.2732 0.0379526 24.3081 0.734447 25.9897 1.99223C27.6712 3.25002 28.9142 5.00526 29.5422 7.00906C30.1703 9.01287 30.1516 11.1636 29.4889 13.1561C28.8261 15.1487 27.5528 16.8821 25.8496 18.1105C24.1465 19.3389 22.0998 19.9999 19.9999 19.9999C18.6192 19.9999 17.4974 21.1192 17.4974 22.4999C17.4974 22.8314 17.3657 23.1493 17.1313 23.3837C16.8969 23.6182 16.5789 23.7499 16.2474 23.7499H13.7474ZM22.4999 9.99994C23.1629 9.99994 23.7988 9.73655 24.2676 9.26771C24.7365 8.79888 24.9999 8.16299 24.9999 7.49996C24.9999 6.83692 24.7365 6.20104 24.2676 5.7322C23.7988 5.26336 23.1629 4.99997 22.4999 4.99997C21.8368 4.99997 21.201 5.26336 20.7321 5.7322C20.2633 6.20104 19.9999 6.83692 19.9999 7.49996C19.9999 8.16299 20.2633 8.79888 20.7321 9.26771C21.201 9.73655 21.8368 9.99994 22.4999 9.99994Z"
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
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7474 23.7499C13.7488 23.7499 13.7499 23.751 13.7499 23.7524V24.9999C13.7499 25.3314 13.6182 25.6493 13.3838 25.8837C13.1494 26.1182 12.8314 26.2498 12.4999 26.2498H11.2499C10.5596 26.2498 9.99994 26.8095 9.99994 27.4998C9.99994 28.1629 9.73655 28.7988 9.26771 29.2676C8.79887 29.7364 8.16299 29.9998 7.49996 29.9998H2.49999C1.83695 29.9998 1.20107 29.7364 0.732229 29.2676C0.26339 28.7988 0 28.1629 0 27.4998V24.2674C0.000141593 23.6044 0.263625 22.9686 0.732496 22.4999L7.04801 16.1844C9.11881 14.1136 9.62828 11.0007 10.1776 8.12409C10.2709 7.63574 10.4008 7.15289 10.5674 6.67969C11.2646 4.69889 12.5678 2.98785 14.292 1.78918C16.0162 0.590515 18.074 -0.0349387 20.1736 0.00150694C22.2732 0.0379526 24.3081 0.734447 25.9897 1.99223C27.6712 3.25002 28.9142 5.00526 29.5422 7.00906C30.1703 9.01287 30.1516 11.1636 29.4889 13.1561C28.8261 15.1487 27.5528 16.8821 25.8496 18.1105C24.1465 19.3389 22.0998 19.9999 19.9999 19.9999C18.6192 19.9999 17.4974 21.1192 17.4974 22.4999C17.4974 22.8314 17.3657 23.1493 17.1313 23.3837C16.8969 23.6182 16.5789 23.7499 16.2474 23.7499H13.7474ZM22.4999 9.99994C23.1629 9.99994 23.7988 9.73655 24.2676 9.26771C24.7365 8.79888 24.9999 8.16299 24.9999 7.49996C24.9999 6.83692 24.7365 6.20104 24.2676 5.7322C23.7988 5.26336 23.1629 4.99997 22.4999 4.99997C21.8368 4.99997 21.201 5.26336 20.7321 5.7322C20.2633 6.20104 19.9999 6.83692 19.9999 7.49996C19.9999 8.16299 20.2633 8.79888 20.7321 9.26771C21.201 9.73655 21.8368 9.99994 22.4999 9.99994Z"
                fill="black"
              />
            </svg>
              </div>
          <button type="submit">
                {loading ? "Cargando..." : "Actualizar Contraseña"}
            </button>
            <button onClick={e => navigate(`/welcome`)}>
            {loading ? "Cargando..." : "Regresar"}
          </button>
          </form>
          </div>
          </>
    );
};

export default SellerEdit;