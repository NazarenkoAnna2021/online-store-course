import { FC } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { IDevice } from '../../../../../entities/IDevice';
import { Star } from '../../../../../assets/star'
import { styles } from './styles';
import { useNavigate } from 'react-router';
import { DEVICE_ROUTE } from '../../../../../utils/constants';
import { useAppSelector } from '../../../../../hooks/redux';

interface IProps {
    device: IDevice;
};

export const DeviceItem: FC<IProps> = ({ device }) => {
    const { brands } = useAppSelector(state => state.devices);
    const navigate = useNavigate();

    return (
        <Col md={3}>
            <Card style={styles.card} border={'light'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id, { state: { device } })}>
                <Image src={process.env.REACT_APP_API_URL + device.img} />
                <div style={styles.cardInfo}>
                    <div style={styles.brandName}>{brands.find(brand => brand.id === device.brandId)?.name}</div>
                    <div style={styles.rating}>
                        <div>{device.rating}</div>
                        <Star width={18} height={18} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};