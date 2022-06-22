import { FC, useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../../../../http/deviceAPI';
import { styles } from './styles';

interface IProps {
    handleClose: () => void,
}

export const CreateBrand: FC<IProps> = ({ handleClose }) => {
    const [brand, setBrand] = useState('');

    const addBrand = () => {
        createBrand({ name: brand }).then(data => handleClose());
    };

    return (
        <Container style={styles.container}>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Form>
                <Form.Control value={brand} onChange={e => setBrand(e.target.value)} placeholder='введите название бренда' />
            </Form>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Container>
    );
};