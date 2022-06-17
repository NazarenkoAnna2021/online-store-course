import { FC, useCallback, useMemo } from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { appStateSlice } from "../../../../store/redux/reducers/appStateSlice";
import { SHOP_ROUTE } from "../../../../utils/constants";
import { styles } from "./styles";

export const NavBar: FC = () => {
    const { isAuth } = useAppSelector(state => state.appState);
    const { setIsAuth } = appStateSlice.actions;
    const dispatch = useAppDispatch();

    const setAuth = useCallback(() => {console.log(isAuth); return dispatch(setIsAuth(!isAuth))}, [isAuth]);

    const buttonsSet = useMemo(() => {
        return isAuth
            ? <Nav style={styles.navButtons}>
                <Button variant="outline-light" style={styles.adminButton}>Админ панель</Button>
                <Button variant="outline-light" onClick={setAuth} >Выйти</Button>
            </Nav>
            : <Nav className="ml-auto" style={{ color: 'white' }}>
                <Button variant="outline-light" onClick={setAuth} >Авторизация</Button>
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