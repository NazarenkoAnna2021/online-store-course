import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch } from "../../../hooks/redux";
import { login, registration } from "../../../http/userAPI";
import { userSlice } from "../../../store/redux/reducers/userSlice";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../../../utils/constants";

export const useAuth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const { setIsAuth } = userSlice.actions;
    const { setUser } = userSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClick = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            dispatch(setIsAuth(true));
            dispatch(setUser(data));
            navigate(SHOP_ROUTE);
        } catch (e: any) {
            alert(e.response.data.message)
        }
    };

    const headerText = useMemo(() => { return isLogin ? 'Авторизация' : 'Регистрация' }, [location]);

    const buttonText = useMemo(() => { return isLogin ? 'Войти' : 'Регистрация' }, [location]);

    return { location, isLogin, headerText, buttonText, email, password, setEmail, setPassword, navigate, onClick };
};