import { FC, memo } from 'react';
import { Card } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { deviceSlice } from '../../../../../store/redux/reducers/deviceSlice';
import { styles } from './styles';

export const BrandBar: FC = memo(() => {
    const { brands, selectedBrand } = useAppSelector(state => state.devices);
    const { setSelectedBrand } = deviceSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div style={styles.container}>
            {brands.map(brand =>
                <Card
                    key={brand.id}
                    border={brand.id === selectedBrand ? 'dark' : 'light'}
                    className='p-2'
                    style={styles.card}
                    onClick={() => dispatch(setSelectedBrand(brand.id))}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});