import { FC, ReactElement, useCallback, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ModalWindow } from '../../../../shared/components/ModalWindow';
import { CreateBrand } from '../../components/createBrand';
import { CreateDevice } from '../../components/createDevice';
import { CreateType } from '../../components/createType';
import { styles } from './styles';

export const AdminScreen: FC = () => {
    const [isShown, setIsShown] = useState(false);
    const [modalContent, setModalContent] = useState<ReactElement>(<></>);

    const handleClose = () => setIsShown(false);

    const openModal = (element: ReactElement) => {
        setModalContent(element);
        setIsShown(true);
    };

    const handleShowType = useCallback(() => openModal(<CreateType handleClose={handleClose} />), [isShown]);

    const handleShowBrand = useCallback(() => openModal(<CreateBrand handleClose={handleClose} />), []);

    const handleShowDevice = useCallback(() => openModal(<CreateDevice handleClose={handleClose} />), []);


    return (
        <Container style={styles.container}>
            <Button style={styles.addingButton} variant='outline-dark' onClick={handleShowType}>Добавить тип</Button>
            <Button style={styles.addingButton} variant='outline-dark' onClick={handleShowBrand}>Добавить бренд</Button>
            <Button style={styles.addingButton} variant='outline-dark' onClick={handleShowDevice}>Добавить устройство</Button>
            <ModalWindow handleClose={handleClose} isShown={isShown} >{modalContent}</ModalWindow>
            <Outlet />
        </Container>
    );
};