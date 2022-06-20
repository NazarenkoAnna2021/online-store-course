import { FC } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { FilledStar } from '../../../../../assets/filledStar';
import { IDevice } from '../../../../../entities/IDevice';
import { styles } from './styles';

const DESCRIPTION = [
    {
        id: 0,
        title: 'SLfgdb',
        description: 'Sfdbfd bfbd fsslvl  svsvsmd lvvlvpsl',
    },
    {
        id: 1,
        title: 'Dldldld',
        description: 'Sfdbfd bfbd fsslvl  svsvsmd lvvlvpsl',
    },
    {
        id: 2,
        title: 'Dbht',
        description: 'Sfdbfd bfbd fsslvl  svsvsmd lvvlvpsl',
    },
    {
        id: 3,
        title: 'Sderg',
        description: 'Sfdbfd bfbd fsslvl  svsvsmd lvvlvpsl',
    },
]

export const DeviceScreen: FC = () => {
    const { device } = useLocation().state as { device: IDevice };

    return (
        <Container style={styles.container}>
            <Row>
                <Col md={4}>
                    <Image src={device.img} />
                </Col>
                <Col md={4} >
                    <h2 style={styles.name}>{device.name}</h2>
                    <div style={styles.rating}>
                        <div style={styles.ratingText}>{device.rating}</div>
                        <FilledStar width={240} height={240} />
                    </div>
                </Col>
                <Col md={4}>
                    <Card style={styles.card}>
                        <h3>От: {device.price} грн</h3>
                        <Button variant='outline-dark' onClick={() => { }}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row style={styles.description}>
                <h1>Характеристики</h1>
                {DESCRIPTION.map((description, index) =>
                    <Row key={description.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', ...styles.descriptionItem }}>
                        {description.title}: {description.description}
                    </Row>
                )}
            </Row>

        </Container>
    );
};