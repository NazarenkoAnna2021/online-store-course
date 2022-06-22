import { FC, memo } from 'react';
import { Pagination, Row } from 'react-bootstrap';
import { useAppSelector } from '../../../../../hooks/redux';
import { DeviceItem } from '../deviceItem';

const items = [1, 2, 3, 4, 5];

export const Pages: FC = () => {
    const { devices, selectedBrand, selectedType } = useAppSelector(state => state.devices);

    return (
        <Pagination className='mt-5'>
            {items.map(item =>
                <Pagination.Item>
                    {item}
                </Pagination.Item>
            )}
        </Pagination>
    );
};