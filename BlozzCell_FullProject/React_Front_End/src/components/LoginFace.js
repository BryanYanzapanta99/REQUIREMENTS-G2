import '../assets/css/loginFace.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';


export default function Loginface(){
   const { logout } = useAuth();
   return(
     <div className='container-new'>
        <h1 className='title-log'>BLOZ CELL </h1>
        <h3>Accesorios, Celulares, y servicios Técnico</h3>
     </div>
   );
}