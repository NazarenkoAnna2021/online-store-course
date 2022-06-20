import { FC } from 'react';
import { Row } from 'react-bootstrap';
import { useAppSelector } from '../../../../../hooks/redux';
import { DeviceItem } from '../deviceItem';
import { styles } from './styles';

export const DeviceList: FC = () => {
    const { devices, selectedBrand, selectedType } = useAppSelector(state => state.devices);

    return (
        <Row style={styles.container}>
            {devices.map(device =>
                <DeviceItem key={device.id} device={device} />
            )}
        </Row>
    );
};