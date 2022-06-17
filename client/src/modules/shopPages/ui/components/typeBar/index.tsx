import { FC } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { typeSlice } from '../../../../../store/redux/reducers/typeSlice';
import { styles } from './styles';

export const TypeBar: FC = () => {
    const { types, selectedType } = useAppSelector(state => state.types);
    const { setSelectedType } = typeSlice.actions;
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