import { createSlice } from "@reduxjs/toolkit";
import { IType } from "../../../entities/IType";

interface ITypeState {
    types: IType[],
    selectedType: number | null,
    isLoading: boolean,
    error: string,
};

const initialState: ITypeState = {
    types: [],
    selectedType: null,
    isLoading: false,
    error: "",
};

export const typeSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {
        setType(state, action) {
            state.types = action.payload;
        },
        setSelectedType(state, action) {
            state.selectedType = action.payload;
        }
    },
});

export default typeSlice.reducer;