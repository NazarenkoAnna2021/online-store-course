import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch } from "../../../hooks/redux";
import { login, registration } from "../../../http/userAPI";
import { userSlice } from "../../../store/redux/reducers/userSlice";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../../../utils/constants";

const signIn = async (email: string, password: string) => {
    const response = await registration(email, password);
    return response;
};

const onLogin = async (email: string, password: string) => {
    const response: any = await login(email, password);
    return response;
};

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
        // try {
        //     let data;
        //     if (!isLogin) {
        //         data = signIn(email, password);
        //     } else {
        //         data = await onLogin(email, password);
        //     }
        //         dispatch(setIsAuth(true));
        //         dispatch(setUser({ id: data.id, email: data.email, role: data.role }));
        //         navigate(SHOP_ROUTE);
        // } catch (e: any) {
        //     alert(e)
        // }
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