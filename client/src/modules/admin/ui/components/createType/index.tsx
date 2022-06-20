import { FC } from 'react';
import { Container, Form, Modal } from 'react-bootstrap';
import { styles } from './styles';

export const CreateType: FC = () => {
    return (
        <Container>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Form>
                <Form.Control placeholder='введите название типа'/>
            </Form>
        </Container>
    );
};