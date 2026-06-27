import { useAuthStore } from "@/store/useAuthStore";

function useAuth() {
    
    const user = useAuthStore((state) => state.user);

    return {user, isLogin:user!=null};

}

export default useAuth;