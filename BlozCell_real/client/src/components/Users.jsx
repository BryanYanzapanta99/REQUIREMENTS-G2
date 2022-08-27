import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkToken, getUsers } from "../services/api";

import styles from "./styles.module.scss";


const Users = () => {
    const [users,setUsers]= useState([]);
    const [actualUser,setActualUser] = useState([]);
    const [userRole,setUserRole] = useState();
    const [seller,setSeller] = useState();
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    
    useEffect(() => {

        checkAuth(token);
        if (actualUser.rol === "admin"){       
           getAllUsers();
        }
      }, [token,actualUser,users]);

        const getAllUsers = async ()=>{
            let response= await getUsers(token);
            setUsers(response.data);
        };
    
        const checkAuth = async() =>{
            let response = await checkToken(token);
             setActualUser(response.data);
        }

    return (
        <div className={styles.tableContainer} >
        <table>
        <thead>
            <tr className='table-head'>
              <th scope="col"> ID</th>
                <th scope="col">Username</th>
                <th scope="col">Names</th>
                <th scope="col" >Last Names</th>
                <th scope="col" >email</th>
                <th scope="col" >cedula</th>
                <th scope="col">rol</th>
                <th scope="col" >Estado </th>
                <th scope="col" > Editar</th>
                <th scope="col" >Eliminar </th>
            </tr>
        </thead>
        <tbody>
          {
                users.map(user=>{
                  return(
                    <tr key ={user._id}> 
                      <td>{user._id}</td> 
                      <td> {user.nombre} </td>
                      <td>{user.firstNames}</td>
                      <td>{user.lastNames}</td>
                      <td>{user.correo}</td>
                      <td> {user.cedula} </td>
                      <td>{user.rol}</td>
                      <td>{user.estado}</td>
                      <td><button class="editbtn">edit</button></td>
                      <td><button class="deletetn">delete</button></td>

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