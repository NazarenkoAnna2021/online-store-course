import { FC, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch } from '../../../../../hooks/redux';
import { fetchBrands, fetchDevices, fetchTypes } from '../../../../../http/deviceAPI';
import { brandSlice } from '../../../../../store/redux/reducers/brandSlice';
import {deviceSlice} from '../../../../../store/redux/reducers/deviceSlice';
import { typeSlice } from '../../../../../store/redux/reducers/typeSlice';
import { BrandBar } from '../../components/brandBar';
import { DeviceList } from '../../components/deviceList';
import { TypeBar } from '../../components/typeBar';

export const MainScreen: FC = () => {
    const { setBrands } = brandSlice.actions;
    const { setType } = typeSlice.actions;
    const { setDevice } = deviceSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchBrands().then(data => dispatch(setBrands(data)));
        fetchTypes().then(data => dispatch(setType(data)));
        fetchDevices().then(data => dispatch(setDevice(data.rows)));
    }, []);

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3} >
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
};