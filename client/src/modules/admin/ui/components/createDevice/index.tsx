import { FC, useState } from 'react';
import { Button, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { IInfo } from '../../../../../entities/IInfo';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { createDevice } from '../../../../../http/deviceAPI';
import { deviceSlice } from '../../../../../store/redux/reducers/deviceSlice';
import { styles } from './styles';

interface IProps {
    handleClose: () => void,
}

export const CreateDevice: FC<IProps> = ({ handleClose }) => {
    const { types, selectedType, brands, selectedBrand } = useAppSelector(state => state.devices);
    const { setSelectedType, setSelectedBrand } = deviceSlice.actions;
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState('');
    const [info, setInfo] = useState<IInfo[]>([]);

    const addInfo = () => setInfo([...info, { title: '', description: '', id: Date.now() }]);

    const deleteInfo = (id: number | undefined) => setInfo(info.filter(i => i.id !== id));

    const changeInfo = (key: number, value: string, id: number) => {
        setInfo(info.map(i => i.id === id ? { ...i, [key]: value } : i))
    }

    const selectFile = (e: any) => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', String(selectedBrand));
        formData.append('typeId', String(selectedType));
        formData.append('info', JSON.stringify(info));
        createDevice(formData).then(data => handleClose());
    };

    return (
        <Container>
            <Modal.Header style={styles.distance} closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Добавить девайс
                </Modal.Title>
            </Modal.Header>
            <Form>
                <Dropdown style={styles.distance}>
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {types.map(type =>
                            <Dropdown.Item key={type.id} onClick={() => dispatch(setSelectedType(type))} >{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={styles.distance}>
                    <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {brands.map(brand =>
                            <Dropdown.Item key={brand.id} onClick={() => dispatch(setSelectedBrand(brand))}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={styles.distance}
                    placeholder='введите название девайса'
                />
                <Form.Control
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                    style={styles.distance}
                    type='number'
                    placeholder='введите цену девайса'
                />
                <Form.Control
                    onChange={selectFile}
                    style={styles.distance}
                    type='file'
                />
                <hr />
                <Button style={styles.distance} variant='outline-dark' onClick={addInfo}>Добавить свойство</Button>
                {info.map(i =>
                    <Row key={i.id} style={styles.distance}>
                        <Col md={4}>
                            <Form.Control placeholder='название' />
                        </Col>
                        <Col md={4}>
                            <Form.Control placeholder='описание' />
                        </Col>
                        <Col>
                            <Button onClick={() => deleteInfo(i.id)}>Удалить</Button>
                        </Col>
                    </Row>
                )}
            </Form>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Container>
    );
};