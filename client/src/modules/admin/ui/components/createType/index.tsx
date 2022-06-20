import { FC, useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { createType } from '../../../../../http/deviceAPI';

interface IProps {
    handleClose: () => void,
}

export const CreateType: FC<IProps> = ({ handleClose }) => {
    const [type, setType] = useState('');

    const addType = () => {
        createType({ name: type }).then(data => setType(''));
    };

    return (
        <Container>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Form>
                <Form.Control value={type} onChange={e => setType(e.target.value)} placeholder='введите название типа' />
            </Form>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Container>
    );
};