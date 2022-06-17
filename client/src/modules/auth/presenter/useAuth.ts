import { useMemo } from "react";
import { useLocation } from "react-router";
import { LOGIN_ROUTE } from "../../../utils/constants";

export const useAuth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const headerText = useMemo(() => { return isLogin ? 'Авторизация' : 'Регистрация' }, [location]);
    const buttonText = useMemo(() => { return isLogin ? 'Войти' : 'Регистрация' }, [location]);
    
    return {location, isLogin, headerText, buttonText};
}