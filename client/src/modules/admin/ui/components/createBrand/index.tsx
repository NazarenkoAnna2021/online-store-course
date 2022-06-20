import { FC, useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../../../../http/deviceAPI';
import { styles } from './styles';

interface IProps {
    handleClose: () => void,
}

export const CreateBrand: FC<IProps> = ({ handleClose }) => {
    const [brand, setBrand] = useState('');

    const addType = () => {
        createBrand({ name: brand }).then(data => setBrand(''));
    };

    return (
        <Container style={styles.container}>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Form>
                <Form.Control placeholder='введите название бренда' />
            </Form>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Container>
    );
};