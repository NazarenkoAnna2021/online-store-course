import { FC, memo, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { brandSlice } from '../../../../../store/redux/reducers/brandSlice';
import { styles } from './styles';

export const BrandBar: FC = memo(() => {
    const { brands, selectedBrand } = useAppSelector(state => state.brands);
    const { setSelectedBrand } = brandSlice.actions;
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