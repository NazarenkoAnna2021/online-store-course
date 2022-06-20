import { FC } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { deviceSlice } from '../../../../../store/redux/reducers/deviceSlice';
import { styles } from './styles';

export const TypeBar: FC = () => {
    const { types, selectedType } = useAppSelector(state => state.devices);
    const { setSelectedType } = deviceSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <ListGroup>
            {types.map(type =>
                <ListGroup.Item
                    style={styles.item}
                    active={type.id === selectedType}
                    key={type.id}
                    onClick={() => dispatch(setSelectedType(type.id))}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};