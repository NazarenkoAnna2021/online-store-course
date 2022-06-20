import { FC, ReactElement } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { styles } from './styles';

interface IProps {
    handleClose: () => void,
    isShown: boolean,
    children: ReactElement,
};

export const ModalWindow: FC<IProps> = ({ handleClose, isShown, children }) => {
    return (
        <Modal
            show={isShown}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            {children}
        </Modal>
    );
};