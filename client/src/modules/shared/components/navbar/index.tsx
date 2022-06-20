import { FC, useCallback, useMemo } from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { appStateSlice } from "../../../../store/redux/reducers/appStateSlice";
import { userSlice } from "../../../../store/redux/reducers/userSlice";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../../../utils/constants";
import { styles } from "./styles";

export const NavBar: FC = () => {
    const navigate = useNavigate();
    const { isAuth } = useAppSelector(state => state.appState);
    const { setIsAuth } = appStateSlice.actions;
    const { setUser } = userSlice.actions;
    const dispatch = useAppDispatch();

    const setAuth = useCallback(() => {
        dispatch(setIsAuth(!isAuth));
        openAuthScreen();
    }, [isAuth]);

    const logOut = () => {
        setAuth();
        dispatch(setUser({}));
    };

    const openAuthScreen = useCallback(() => navigate(LOGIN_ROUTE), []);

    const openAdminScreen = useCallback(() => navigate(ADMIN_ROUTE), []);

    const buttonsSet = useMemo(() => {
        return isAuth
            ? <Nav style={styles.navButtons}>
                <Button variant="outline-light" onClick={openAdminScreen} style={styles.adminButton}>Админ панель</Button>
                <Button variant="outline-light" onClick={logOut} >Выйти</Button>
            </Nav>
            : <Nav className="ml-auto" style={{ color: 'white' }}>
                <Button variant="outline-light" onClick={openAuthScreen} >Авторизация</Button>
            </Nav>
    }, [isAuth]);

    return (
        <Navbar bg="dark" variant="dark" style={styles.bar} >
            <Container>
                <NavLink style={styles.title} to={SHOP_ROUTE} >КупиДевайс</NavLink>
                {buttonsSet}
            </Container >
        </Navbar>
    );
};