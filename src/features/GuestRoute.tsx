import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {

    const {isLogin} = useAuth();
    return isLogin ? <Navigate to="/trip-dashboard" replace /> : <Outlet />;
    
};

export default GuestRoute;