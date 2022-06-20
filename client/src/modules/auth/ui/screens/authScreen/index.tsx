import { FC, useMemo } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { registration } from '../../../../../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../../../../utils/constants';
import { useAuth } from '../../../presenter/useAuth';
import { styles } from './styles';

export const AuthScreen: FC = () => {
    const { isLogin, headerText, location, buttonText, email, password, setEmail, setPassword, onClick } = useAuth();

    const linkText = useMemo(() => {
        return isLogin
            ? <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрииуйтесь!</NavLink>
            </div>
            : <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
            </div>
    }, [location]);

    return (
        <Container style={styles.container}>
            <Card style={styles.card} >
                <h2 style={styles.header}>{headerText}</h2>
                <Form style={styles.form}>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <div style={styles.buttonsBlock}>
                        {linkText}
                        <Button variant={'outline-success'} onClick={onClick}>{buttonText}</Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};