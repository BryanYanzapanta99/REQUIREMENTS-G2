import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkToken, getUsers,deleteUserRest } from "../services/api";

import styles from "./styles.module.scss";


const Users = () => {
    const [users,setUsers]= useState([]);
    const [actualUser,setActualUser] = useState([]);
    const [userRole,setUserRole] = useState();
    const [seller,setSeller] = useState();
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if(token){
          checkAuth(token);
          if (actualUser.rol === "admin"){       
             getAllUsers();
          }
        }
      }, [token,actualUser]);

        const getAllUsers = async ()=>{
            let response= await getUsers(token);
            setUsers(response.data);
        };
    
        const checkAuth = async() =>{
            let response = await checkToken(token);
             setActualUser(response.data);
        }

        const changeUserState = () =>{

        }
        const deleteUser = async (id) => {
            await deleteUserRest(id);
            getAllUsers();
        }
    return (
        <div className={styles.tableContainer} >
        <table className={styles.styledtable}>
        <thead>
            <tr className='table-head'>
              <th scope="col"> Código</th>
                <th scope="col">Username</th>
                <th scope="col">Nombres</th>
                <th scope="col" >Apellidos</th>
                <th scope="col" >Email</th>
                <th scope="col" >Cédula</th>
                <th scope="col">Rol</th>
                <th scope="col" >Estado </th>
                <th scope="col" > Editar</th>
                <th scope="col" >Cambiar Estado</th>
                <th scope="col" >Eliminar </th>
            </tr>
        </thead>
        <tbody>
          {

                users.map(user=>{
                  if(user.estado === 1){
                    user.estadoEscrito="Activo"
                  }
                  else{
                    user.estadoEscrito="Inactivo"
                  }
                  
                  return(
                    <tr key ={user._id}> 
                      <td>{user._id}</td> 
                      <td> {user.nombre} </td>
                      <td>{user.firstNames}</td>
                      <td>{user.lastNames}</td>
                      <td>{user.correo}</td>
                      <td> {user.cedula} </td>
                      <td>{user.rol}</td>
                      <td>{user.estadoEscrito}</td>
                      <td><button onClick={e => navigate(`/user/editUser/${user._id}`)}> Editar</button> </td>
                      <td><button onClick={() => changeUserState(user._id)}> </button> Cambiar a Inactivo</td>
                      <td><button  clasName={styles.deletebutton} onClick={() => deleteUser(user._id)}>Borrar</button> </td>

                      </tr>
                  )
                }
                  )
            }
           
        </tbody>
    </table>
     <div className={styles.welcome}>
            <div className={styles.buttons}>
            <button onClick={() => navigate("/register")}>Register New User</button>
            </div>
     </div>
    </div>
    );
};

export default Users;