import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users"
import Home from "./components/Home";
import EditUser from "./components/EditUser";

import styles from './App.module.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/users" element={<Users />}   />
          <Route path="/user/editUser/:id" element={<EditUser></EditUser>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
