import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoutes = () => {

		const user=useSelector(state=>state.user)
    if(user){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectedRoutes;