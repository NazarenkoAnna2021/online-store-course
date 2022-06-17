import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrandBar } from '../../components/brandBar';
import { TypeBar } from '../../components/typeBar';

export const MainScreen: FC = () => {

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3} >
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                </Col>
            </Row>
        </Container>
    );
};