import { createSlice } from "@reduxjs/toolkit";
import { IBrand } from "../../../entities/IBrand";
import { IDevice } from "../../../entities/IDevice";
import { IInfo } from "../../../entities/IInfo";
import { IType } from "../../../entities/IType";

interface IDeviceState {
    devices: IDevice[],
    count: number,
    brands: IBrand[],
    selectedBrand: number | null,
    types: IType[],
    selectedType: number | null,
    infos: IInfo[],
    isLoading: boolean,
    error: string,
};

const initialState: IDeviceState = {
    devices: [],
    count: 0,
    brands: [],
    selectedBrand: null,
    types: [],
    selectedType: null,
    infos: [],
    isLoading: false,
    error: '',
};

export const deviceSlice = createSlice({
    name: 'devices',
    initialState,
    reducers: {
        setDevice(state, action) {
            state.devices = action.payload.rows;
            state.count = action.payload.count;
        },
        addDevice(state, action) {
            state.devices.push(action.payload);
        },
        addInfo(state, action) {
            state.infos.push(action.payload);
        },
        setBrands(state, action) {
            state.brands = action.payload;
        },
        setSelectedBrand(state, action) {
            state.selectedBrand = action.payload;
        },
        setType(state, action) {
            state.types = action.payload;
        },
        setSelectedType(state, action) {
            state.selectedType = action.payload;
        }
    },
});

export default deviceSlice.reducer;