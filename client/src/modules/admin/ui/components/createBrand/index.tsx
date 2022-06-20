import { FC } from 'react';
import { Container, Form, Modal } from 'react-bootstrap';
import { styles } from './styles';

export const CreateBrand: FC = () => {

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
        </Container>
    );
};