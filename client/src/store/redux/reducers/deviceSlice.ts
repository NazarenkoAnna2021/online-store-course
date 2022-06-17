import { createSlice } from "@reduxjs/toolkit";
import { IDevice } from "../../../entities/IDevice";

interface IDeviceState {
    devices: IDevice[],
    isLoading: boolean,
    error: string,
};

const initialState: IDeviceState = {
    devices: [],
    isLoading: false,
    error: '',
};

export const deviceSlice = createSlice({
    name: 'devices',
    initialState,
    reducers: {
        
    },
});

export default deviceSlice.reducer;