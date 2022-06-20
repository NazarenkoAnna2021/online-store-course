import { createSlice } from "@reduxjs/toolkit";
import { IDevice } from "../../../entities/IDevice";
import { IInfo } from "../../../entities/IInfo";

interface IDeviceState {
    devices: IDevice[],
    infos: IInfo[],
    isLoading: boolean,
    error: string,
};

const initialState: IDeviceState = {
    devices: [
        {
            id: 0,
            name: 'string',
            price: 1000,
            rating: 0,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvlyn61Se1xPmtCOkZE9YpvTmsGXME1uG7A&usqp=CAU',
        },
        {
            id: 1,
            name: 'string',
            price: 1000,
            rating: 0,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvlyn61Se1xPmtCOkZE9YpvTmsGXME1uG7A&usqp=CAU',
        },
        {
            id: 2,
            name: 'string',
            price: 1000,
            rating: 0,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvlyn61Se1xPmtCOkZE9YpvTmsGXME1uG7A&usqp=CAU',
        },
        {
            id: 3,
            name: 'string',
            price: 1000,
            rating: 0,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvlyn61Se1xPmtCOkZE9YpvTmsGXME1uG7A&usqp=CAU',
        },
    ],
    infos: [],
    isLoading: false,
    error: '',
};

export const deviceSlice = createSlice({
    name: 'devices',
    initialState,
    reducers: {
        setDevice(state, action) {
            state.devices = action.payload;
        },
        addDevice(state, action) {
            state.devices.push(action.payload);
        },
        addInfo(state, action) {
            state.infos.push(action.payload);
        }
    },
});

export default deviceSlice.reducer;